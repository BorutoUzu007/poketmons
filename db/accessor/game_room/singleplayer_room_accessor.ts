import prisma from '../../prisma';
import { NextResponse } from 'next/server';

export async function createRoom(roomID: string, max_players: number, room_mode_type: string, current_players: number, playersID: string) {
    try {
        const data = await prisma.singlePlayerRooms.create({
            data: {
                roomID: roomID,
                max_players: max_players,
                room_mode_type: room_mode_type,
                current_players: current_players,
                playerIDs: [playersID],
            }
        })
        console.log(`The room ${roomID} for mode ${room_mode_type} has been created !`)
        return true
    } catch (err) {
        console.log(err)
        throw new Error("Internal Server Error")
    }
    
}

export async function checkRoom(roomID: string) {
    try {
        console.log(`Searching for room: ${roomID}`)
        const data = await prisma.singlePlayerRooms.findFirst({
            where:{
                roomID: roomID,
                closed: false,
            }
        });
        return data
    } catch (err) {
       throw new Error("Internal Server Error")
    }
}

export async function setScore(score: number, encoded_roomID: string) {
    try {
        console.log(`${score} ${encoded_roomID}`)
        const roomID = encoded_roomID.replace(/%3A/g, ":");
        console.log(roomID)
        console.log("Saving the score...");
        const data = await prisma.singlePlayerRooms.update({
            where: {
               roomID: roomID, 
            },
            data: {
                correct_answered: score
            }
        })
        console.log(data);
        return data;
    }
    catch (err) {
        throw new Error(`Internal Server Error - ${err}`)
    }
}

export async function closeRoom(encoded_roomID: string) {
    try {
        console.log("Closing the room...");
        const roomID = encoded_roomID.replace(/%3A/g, ":");
        const data = await prisma.singlePlayerRooms.update({
            where: {
                roomID: roomID,
                closed: false
            },
            data: {
                closed: true,
                closed_date: new Date()
            }
        })
        return data;
    } catch (err) {
        throw new Error("Internal Server Error")
    }
}