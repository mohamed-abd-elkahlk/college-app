"use server";
import { redirect } from "next/navigation";

import connectMongo from "@/lib/db";
import { issueJwt } from "@/lib/utils";
import User from "@/models/user";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function Login(prevState: any, loginData: FormData) {
  const loginInfo = {
    email: loginData.get("email"),
    password: loginData.get("password") as unknown as string,
  };

  await connectMongo();

  const user = await User.findOne({ email: loginInfo.email });
  if (!user) {
    return { message: "email or password incorrect" };
  }
  const isVarifid = bcrypt.compareSync(loginInfo.password, user.password);
  if (!isVarifid) {
    return { message: "email or password incorrect" };
  }
  const token = issueJwt(user);
  cookies().set("jwt", token);
  redirect("/profile");
}
