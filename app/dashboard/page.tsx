
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";

export default async function DashboardRoot() {
    const session = await getServerSession();
    return (
        <div className="
                        mt-5 
                        flex 
                        flex-col 
                        sm:items-center 
                        w-screen 
                        h-screen 
                        font-bold 
                        text-xl 
                        md:text-2xl">
            Welcome Back {session?.user?.name}
            <button className="bg-[#FAF0E6] rounded-full text-black p-4">Play Offline</button>
        </div>
    )
    
}
