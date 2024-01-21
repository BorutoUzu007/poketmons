import { GuessThePokemonAllGen } from "@/db/accessor/game_room/guess_the_pokemon_accessor";
import { NextResponse } from "next/server";



export async function GET(req: Request) {
    const questions = await GuessThePokemonAllGen();
    
    if (!questions) {
        return NextResponse.json({status: 404, error: "No data found!"})
    }
    return NextResponse.json({status: 200, data: questions});

}