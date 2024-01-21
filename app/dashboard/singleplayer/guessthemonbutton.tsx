'use client'
import { Button } from "@/components/ui/button";
import { createRoom } from "@/db/accessor/game_room/singleplayer_room_accessor";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { v4 } from 'uuid'

export default function GuessTheMonButton() {

    const { data: session} = useSession();
    const router = useRouter()
    const genRoomID = async () => {
        const baseID: string = v4();
        const roomID = baseID + ':single:guess';
        console.log(roomID);
        
        const response = await fetch('/api/db/create-room', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                roomID: roomID,
                max_players: 1,
                room_mode_type: 'Guess the Pokemon',
                current_players: 1,
                playersID: session?.user?.email || ""
            })
        })
        console.log("umm hi")
        const data = await response.json();
       
       
        if (data.status == 200) {
            console.log("umm hi 2")
            router.push(`http://localhost:3000/dashboard/singleplayer/${roomID}`)
            router.refresh();
        }
        else {
            throw new Error("Something went Wrong!")
        }
    }
    return (
        <div>
            <div className="mt-5 
                        flex 
                        flex-col 
                        sm:items-center 
                        w-full 
                        h-full 
                        font-bold 
                        text-xl 
                        md:text-2xl">
                <button className="bg-[#FAF0E6] rounded-full text-black p-4" onClick={genRoomID}>Guess the Pokemon</button>
            </div>
        </div>
    )
}