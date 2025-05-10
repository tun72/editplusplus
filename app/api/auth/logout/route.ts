import { signOutAction } from "@/lib/auth/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await signOutAction();

  return NextResponse.json({ message: "Signout Success" }, { status: 200 });
}
