import { NextRequest, NextResponse } from "next/server";

type Register = {
    username: string,
    password: string,
}
export async function POST(req: Request){
   const { username, password }: Register = await req.json();
   console.log(username, password);
   

   return NextResponse.json({status: 200,body: { "success": true }});
}