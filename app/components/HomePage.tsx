'use client';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LandingPage() {
    const router = useRouter();
    return (
        <div className="flex flex-row gap-5">
      <Button className="
        bg-[#FAF0E6] 
          rounded-md 
          hover:bg-[#FFFFFF] 
          text-black 
          font-bold" 
        onClick={() => {
                router.push('/login');
                router.refresh();
            }
        }
          >
            Sign In
      </Button>
      <Button className="
          bg-[#FAF0E6] 
          rounded-md 
          hover:bg-[#FFFFFF] 
          text-black 
          font-bold"
          onClick={() => {
            router.push('/signup');
            router.refresh();
        }
    }
          >
            Sign Up
      </Button>
      </div>
    )
}