import { checkRoom } from "@/db/accessor/game_room/singleplayer_room_accessor";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const pageURL =  new URL(req.url);
    const roomID: string = pageURL.searchParams.get('roomID') || "";
    const data = await checkRoom(roomID)
    if (!data) {
        return NextResponse.json({status: 404, message: {error: "Room not Found"}})
    }
    console.log(`Room ${roomID} was found`)
    return NextResponse.json({status: 200, message: {body: "Room Found"}})
    
}