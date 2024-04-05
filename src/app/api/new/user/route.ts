import connectMongo from "@/lib/db";
import User from "@/models/user";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  await connectMongo();
  const news = await User.create(body);
  // revalidatePath("/news");
  return NextResponse.json({ ok: true, _id: news._id });
}
