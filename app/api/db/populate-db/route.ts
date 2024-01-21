import { NextResponse } from "next/server";
import { main } from "@/prisma/seed";

export async function POST(req: Request){
    
    try {
        const response = await main()
        console.log(response)

        return NextResponse.json({status: 200,message: "success"})
    }
    catch (err) {
        return NextResponse.json({status: 500,message: (err as Error).message})
    }

}