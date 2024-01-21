import prisma from "@/db/prisma"
export async function getMatchHistory(offset: number, username: string) {
    const sortedResults = await prisma.singlePlayerRooms.findMany({
        where: {
          playerIDs: {
            has: username
          }
        },
        orderBy: [{ closed_date: 'desc' }],
      });
    return sortedResults
}