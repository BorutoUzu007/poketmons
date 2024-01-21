'use client';

import { getSession, signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {Label} from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import sceptile from "../../public/sceptile.png"
import Image from "next/image";
import { FormControl } from "@chakra-ui/react";

export default function LoginForm() {
  const [loginType, setLoginType] = useState("google");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      
      const response = await fetch("/api/check-session");
      const resp = await response.json()
      if (resp.status === 200) {

    } else if (resp.status === 302) {
      router.push('/dashboard');
    }
  };
  checkSession();
  }, []);
  

  const handleLogin = async (test: string) => {
    
    if (test == "google") {
        signIn('google', {
            callbackUrl: "/",
        });
    }
    else if (test == 'custom') {
        
        signIn('credentials', {
            ...formData,
            callbackUrl: "/",
        })
    }
  };

  return(
    <div className="flex flex-col h-screen items-center mt-20 rounded-lg shadow-lg">
    <Card className=" flex flex-col items-center">
      <CardHeader>
        <CardTitle className="text-5xl font-extrabold text-white">
          Login
        </CardTitle>
      </CardHeader>
      <CardContent>
      <Button onClick={() => handleLogin("google")} className = "mt-10 bg-[#FAF0E6] rounded hover:bg-[#FFFFFF] text-black font-bold px-10 mx-3 text-2xl">Sign In With Google</Button>
      <hr className="mt-10" />
      <Button onClick={() => loginType == 'custom' ? setLoginType('') : setLoginType('custom')} className = "mt-10 mb-3 mx-3 bg-[#FAF0E6] rounded hover:bg-[#FFFFFF] text-black font-bold pl-5 pr-5 text-2xl">Sign In With Credentials</Button>
      
      {loginType === "custom" && (
        <div className="mt-5">
        <FormControl>
        <Label htmlFor="email" className="text-white">Email</Label>
          <Input
            placeholder="Username"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="text-white border-white"
          />
          <Label htmlFor="password" className="text-white">Password</Label>
          <Input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="text-white border-white"
          />
          <CardFooter className="flex justify-center">
          <Button onClick={() =>handleLogin('custom')}  className="mt-10 bg-[#FAF0E6] rounded-md hover:bg-[#FFFFFF] text-black font-bold pl-5 pr-5 text-2xl ">
            Login
          </Button>
          </CardFooter>
        </FormControl>
        </div>
        )}
      </CardContent>
    </Card>
    <div><Image src={sceptile} alt="Mega Sceptile"/></div>
    </div>
  )

}

