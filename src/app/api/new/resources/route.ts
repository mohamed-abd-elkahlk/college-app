import connectMongo from "@/lib/db";
import Resources from "@/models/resources";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, desc, attachments } = body;
  await connectMongo();

  const result = attachments.map((link: any) => ({ link_to_file: link }));

  const resources = await Resources.create({
    title,
    desc,
    attachments: result,
  });

  return NextResponse.json({ ok: true });
}
