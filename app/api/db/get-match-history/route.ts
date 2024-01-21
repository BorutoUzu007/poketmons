import { getMatchHistory } from '@/db/accessor/profile/profile_accessor'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function GET(req: Response) {
    const pageURL = new URL(req.url)
    const session = await getServerSession()
    const offset: number = parseInt(pageURL.searchParams.get('offset') || "0", 10)
    if (session?.user?.email) {
        const data = await getMatchHistory(offset, session.user.email)
        if (data) {
            
            return NextResponse.json({ status: 200, message: { body: data } })
        }
        else {
            return NextResponse.json({ status: 404, message: { error: "No Match History Found" } })
        }
    }
    else {
        return NextResponse.json({ status: 404, message: { error: "Session not found!" } })
    }
    
}