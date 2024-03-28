"use server";

import connectMongo from "@/lib/db";
import Post from "@/models/news";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/utils";
import User from "@/models/user";

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
    if (!user) throw new Error(`now user found for this id: ${token.sub}`);

    //? CREATE the post with the data that i have
    const userId = user._id;
    const arrayOfTages = tags.split(",");
    const post = await Post.create({
      author: userId,
      title,
      facility,
      team,
      tags: arrayOfTages,
    });
    if (!post) throw new Error("can't create new post");
  } catch (error: any) {
    throw new Error(error.message);
  }
}
