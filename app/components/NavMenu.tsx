'use client';
import {signOut, useSession } from "next-auth/react";
import {redirect, useRouter} from "next/navigation";
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"

  import { Button } from "@/components/ui/button"
    import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import AvatarIcon  from "./Avatar";

function NavButton() {
    const { data: session} = useSession();
    const router = useRouter();

    const handleLogout = () => {
        signOut({callbackUrl:"/"});
      };
    

    if (session) {
        return (
            <div className="flex flex-row-reverse gap-3 w-full mr-5 mt-3 cursor-pointer">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button className="rounded-full"><AvatarIcon image={session.user?.image || ""}/></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-44 select-none">
                        <DropdownMenuLabel>{session.user?.name || ""}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4 cursor-pointer" />
                                <span className="cursor-pointer">Profile</span>
                                <DropdownMenuShortcut>Ctrl+P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4 cursor-pointer" />
                                <span className="cursor-pointer">Settings</span>
                                <DropdownMenuShortcut>Ctrl+S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogOut className="mr-2 h-4 w-4 cursor-pointer" onClick={handleLogout}/>
                            <span className="cursor-pointer" onClick={handleLogout}>Log Out</span>
                            <DropdownMenuShortcut>Ctrl+Q</DropdownMenuShortcut>
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