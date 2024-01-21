import GameInitialise from "./gameInit";

interface PageProps {
    room: {roomid: string};
}

export default async function SinglePlayerRoom({params}: {params: {roomid: string}}) {
    console.log(params.roomid);
    const response = await fetch(`${process.env.ENV}/api/db/check-roomid?roomID=${params.roomid}`, { cache: 'no-cache' });
    const data = await response.json();
    console.log(data)
    if (data.status != 200) {
        return (
            <div>
                Page not Found!
            </div>
        )
    }
    
    return (
        <GameInitialise roomid={params.roomid}/>
    )
};


