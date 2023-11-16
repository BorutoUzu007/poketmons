
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import sceptile from "../public/sceptile.png"
import Image from "next/image";
import LandingPage from "./components/HomePage";


export default async function Home() {
  const session = await getServerSession();
  if (session?.user?.email) {
    redirect('/dashboard')
  }
  return (
    <div className="flex flex-col h-screen items-center justify-between">
      <div className="mt-10 font-extrabold text-5xl">Poké-Quiz</div>
      <div>An Immersive Pokémon Quiz game made for all levels of Pokémon Fans</div>
      <LandingPage />
      <div><Image src={sceptile} alt="Mega Sceptile"/></div>
    </div>
  )
}
