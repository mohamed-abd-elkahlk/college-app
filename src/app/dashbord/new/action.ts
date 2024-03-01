"use server";

import connectMongo from "@/lib/db";
import Post from "@/models/posts";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/utils";
import User from "@/models/user";
import { IUser } from "@/types";

export async function createPost(formData: FormData) {
  //? GET formdate from the request.
  const title = formData.get("title");
  const tags = formData.get("tags") as string;
  const facility = formData.get("facility");
  const team = formData.get("team");
  const image = formData.get("image");
  const attachments = formData.get("title");
  //? GET cookies for the user and verify it.
  const userCookies = cookies().get("jwt");
  if (!userCookies?.value) redirect("/");
  const token = verifyToken(userCookies?.value!);
  try {
    await connectMongo();
    //? GET the user id

    const user = await User.findById(token.sub);
    if (!user) throw Error;
    console.log(user._id.toString());

    //? CREATE the post with the data that i have
    const userId = user._id;
    const arrayOfTages = tags.split(",");
    const post = await Post.create({
      user: userId,
      title,
      facility,
      team,
      tags: arrayOfTages,
    });
    return { post };
  } catch (error) {
    return { error };
  }
}
