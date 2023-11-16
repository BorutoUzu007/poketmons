import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextApiRequest,) {
  const session = await getServerSession();

  if (session) {
    return NextResponse.json({status: 302, message: "success"})
  } 
    return NextResponse.json({status: 200, message: "success"})
};
