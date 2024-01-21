import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { v4 } from 'uuid'
import GuessTheMonButton from "./guessthemonbutton";

export default function SinglePlayer() {
    const genRoomID = () => {
        const baseID: string = v4();
        const roomID = baseID + ':single:guess';
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
                <GuessTheMonButton />
            </div>
        </div>
    )
}