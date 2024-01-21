import { closeRoom } from "@/db/accessor/game_room/singleplayer_room_accessor"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const {score, roomid} = await req.json()
    try {
        const set_score = await closeRoom(roomid)
        return NextResponse.json({status: 200, message: {score: set_score}})
    } catch (err) {
        return NextResponse.json({status: 500,message: (err as Error).message})
    }
}