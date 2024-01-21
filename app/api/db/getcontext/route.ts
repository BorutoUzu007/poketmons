import { NextResponse } from "next/server";
import { getUserData } from "@/db/accessor/user_accessor";

export async function POST(req: Request) {
    const email : string = await req.json();
    try{
        const {name, image} = await getUserData(email);

        return NextResponse.json({status: 200, message: "success", body: {name, email, image}})
        
    } catch (err) {
        return NextResponse.json({status: 400, message: (err as Error).message})
    }
}