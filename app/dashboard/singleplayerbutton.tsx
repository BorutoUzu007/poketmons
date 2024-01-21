'use client';

import { useRouter } from "next/navigation";

export function SinglePlayerButton() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/dashboard/singleplayer')
    }
    return (
        <div className="mt-5">
            <button className="bg-[#FAF0E6] rounded-full text-black p-4" onClick={handleClick}>Play Single Player</button>
        </div>
    )
}