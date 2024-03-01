import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export const GET = async (req: NextRequest) => {
  const cookiesString = cookies().get("jwt");
  return NextResponse.json({ cookiesString });
};
