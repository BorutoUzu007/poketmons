'use client';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl } from '@chakra-ui/react';
import { Label } from '@/components/ui/Label';
import sceptile from "../../public/sceptile.png"
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Form() {
    const [formData, setFormData] = useState({ email: "", password: "", username: ""});
    const [successSignup, setSuccessSignup] = useState(false)
    const router = useRouter()
    const handleLogin = () => {
        router.push('/login')
        router.refresh()
    }
    const handleSubmit = async () => {
        const response = await fetch('/api/db/register', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
            }
        )
        const resp = await response.json();
        console.log(resp)
        if (resp.status == 200) {
            console.log("Status is 200")
            setSuccessSignup(true)
        }
        else {
            console.log("Dont know what is the status")
        }
        
    }

    return(
        <div className="flex flex-col h-screen items-center mt-20 rounded-lg shadow-lg">
            <Card className=" flex flex-col items-center">
                <CardHeader>
                    <CardTitle className="text-5xl font-extrabold text-white">
                        Sign Up
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="mt-5">
                        <FormControl>
                            <Label htmlFor="email" className="text-white">Username</Label>
                                <Input
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    className="text-white border-white"
                                />
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
                                <Button onClick={() =>handleSubmit()} className="mt-10 bg-[#FAF0E6] rounded-md hover:bg-[#FFFFFF] text-black font-bold pl-5 pr-5 text-2xl">
                                    Sign Up
                                </Button>
                            </CardFooter>
                        </FormControl>
                        {successSignup && (
                            <div>
                                <hr className='mt-5'/>
                                <div className='text-white m-3'>
                                    Successfull Sign Up
                                </div>
                                <div className='flex justify-center'>
                                <Button onClick={() =>handleLogin()} className="mt-10 bg-[#FAF0E6] rounded-md hover:bg-[#FFFFFF] text-black font-bold pl-5 pr-5 text-2xl">
                                    Login
                                </Button> 
                                </div>
                           
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
            <div><Image src={sceptile} alt="Mega Sceptile"/></div>
        </div>

    )
}