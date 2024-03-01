"use server";

import connectMongo from "@/lib/db";
import { issueJwt, verifyToken } from "@/lib/utils";
import User from "@/models/user";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";

export async function signUp(formData: FormData) {
  const first_name = formData.get("first-name");
  const last_name = formData.get("last-name");
  const email = formData.get("email");
  const password = formData.get("password");

  const jwtCookies = cookies().get("jwt") as unknown as string;
  const token = verifyToken(jwtCookies);
  if (token) return redirect("/dashbord");

  try {
    await connectMongo();
    const user = await User.create({ first_name, last_name, password, email });
    if (!user) throw Error("faild to create user");

    const jwt = issueJwt(user);

    cookies().set("jwt", jwt, { httpOnly: true, sameSite: "strict" });
    return { success: true };
  } catch (error) {
    return { error };
  }
}

export async function signIn(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password") as string;

  const jwtCookies = cookies().get("jwt");

  if (jwtCookies?.value) {
    const token = verifyToken(jwtCookies?.value!);
    if (token) redirect("/dashbord");
  }

  try {
    await connectMongo();
    const user = await User.findOne({ email });
    if (!user) return { message: "wrong email or password" };
    const verifyPassword = bcrypt.compareSync(password, user.password);
    if (!verifyPassword) return { message: "wrong email or password" };

    const jwt = issueJwt(user);

    cookies().set("jwt", jwt, { httpOnly: true, sameSite: "strict" });
  } catch (error) {
    return { error, ok: false };
  }
  redirect("/dashbord");
}
