import { NextResponse } from "next/server";
import { createRoom } from "@/db/accessor/game_room/singleplayer_room_accessor";
type Room = {
    roomID: string,
    max_players: number,
    room_mode_type: string,
    current_players: number,
    playersID: string,
}
export async function POST(req: Request){
    const {roomID, max_players, room_mode_type, current_players, playersID}: Room = await req.json();
    try {   
        const isRoomCreated = await createRoom(roomID, max_players, room_mode_type, current_players, playersID)
        if (isRoomCreated) {
            return NextResponse.json({status: 200, message: {roomID: roomID}})
        }
    }
    catch (err) {
        return NextResponse.json({status: 500,message: (err as Error).message})
    }

}