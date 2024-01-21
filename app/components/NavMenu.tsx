'use client';
import {signOut, useSession } from "next-auth/react";
import {useRouter} from "next/navigation";
import {
    LogOut,
    Settings,
    User,
  } from "lucide-react"

  import { Button } from "@/components/ui/button"
    import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import AvatarIcon  from "./Avatar";


function NavButton() {
    const { data: session} = useSession();
    const router = useRouter();

    const handleProfile = () => {
        router.push("/profile");
    }
    

    const handleLogout = () => {
        signOut({callbackUrl:"/"});
      };
    

    if (session) {
        return (
            <div className="flex flex-row-reverse gap-3 w-full mr-5 mt-3">

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button className="rounded-full cursor-pointer"><AvatarIcon image={session.user?.image || ""}/></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-44 select-none mr-3 bg-[#2a233d]">
                        <DropdownMenuLabel className="text-center font-bold">{session.user?.name || ""}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <div className="flex w-full justify-center cursor-pointer" onClick={handleProfile}>
                                    <User className="mr-2 h-4 w-4 " />
                                    <span>Profile</span>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className="flex w-full justify-center cursor-pointer">
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span >Settings</span>
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <div className="flex w-full justify-center cursor-pointer" onClick={handleLogout}>
                                <LogOut className="mr-2 h-4 w-4 "/>
                                <span>Log Out</span>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        );
    }
    else {
        return (
            <div className="flex justify-between bg-[#B9B4C7] w-screen text-black font-bold rounded-lg">
            </div>
          );
    }
}

export default NavButton;