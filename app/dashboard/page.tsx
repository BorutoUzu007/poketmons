
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { SinglePlayerButton } from "./singleplayerbutton";

export default async function DashboardRoot() {
    const session = await getServerSession();
    return (
        <div className="
                        mt-5 
                        flex 
                        flex-col 
                        sm:items-center 
                        w-full 
                        h-full 
                        font-bold 
                        text-xl 
                        md:text-2xl">
            Welcome Back {session?.user?.name}
            <SinglePlayerButton />
        </div>
    )
    
}
