import Game from "./game";

export interface GameData {
    status: number,
    data: {
        name: string;
        image: string;
        Options: [name: string]; 
      }[]
}
// function waitFiveSeconds(): Promise<void> {
//     return new Promise<void>((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, 5000); // 5000 milliseconds = 5 seconds
//     });
//   }
export default async function GameInitialise({roomid}: {roomid: string}) {
    
    const game_data: GameData = await fetch(`${process.env.ENV}/api/db/guess-the-pokemon`, {cache: 'no-store'}).then((game) => game.json())

    return (
        //@ts-ignore
        <Game GameData={game_data} roomid={roomid} />
    )
}

