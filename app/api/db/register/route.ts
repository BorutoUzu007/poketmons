import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import {hash} from "bcrypt";
type Register = {
    email: string,
    password: string,
    username: string
}
export async function POST(req: Request){
    const { email, password, username }: Register = await req.json();
    const hashedPassword = await hash(password, 10);
    const prisma = new PrismaClient();
    try {
        const user = await prisma.user.create({
            data: {
                email: email,
                password: hashedPassword,
                name: username,
            },
        })
        console.log(user);
        await prisma.$disconnect()

        return NextResponse.json({status: 200,message: "success"})
    }
    catch (err) {
        return NextResponse.json({status: 500,message: (err as Error).message})
    }

}