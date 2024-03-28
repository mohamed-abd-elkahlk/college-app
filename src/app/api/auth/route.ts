import connectMongo from "@/lib/db";
import { issueJwt, verifyToken } from "@/lib/utils";
import User from "@/models/user";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const jwt = cookies().get("jwt");

  if (jwt) {
    try {
      const token = verifyToken(jwt?.value!);
      if (token) throw Error;
      await connectMongo();
      const user = await User.findById(token.sub);
      const newToken = issueJwt(user);
      cookies().set("jwt", newToken, {
        httpOnly: true,
        sameSite: "strict",
      });
      return NextResponse.json({ user, ok: true });
    } catch (error) {
      return NextResponse.json({ error });
    }
  }

  return NextResponse.json({
    auht: "faild",
    resone: "no cookies found ",
    ok: false,
  });
};

export const DELETE = async (req: NextRequest) => {
  try {
    cookies().delete("jwt");
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
