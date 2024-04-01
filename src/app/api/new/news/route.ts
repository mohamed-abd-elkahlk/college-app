import connectMongo from "@/lib/db";
import Post from "@/models/news";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  delete body.file;
  body.tags.split(",");
  await connectMongo();
  const news = await Post.create(body);
  revalidatePath("/news");
  return NextResponse.json({ ok: true, _id: news._id });
}
