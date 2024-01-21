import { getServerSession } from "next-auth";
import {NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  if (session) {
    return NextResponse.json({status: 302, message: "success"})
  } 
    return NextResponse.json({status: 200, message: "success"})
};
