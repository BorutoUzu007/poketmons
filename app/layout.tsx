import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import { getServerSession } from 'next-auth'
import SessionProvider from './components/SessionProvider'
import NavButton from './components/NavMenu'
import { UserProvider } from './contexts/UserContext'
const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokemon',
  description: 'Pokemon Quiz Game',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(); 
  return (
    <html lang="en">
      <body className={nunito.className}>
        <SessionProvider>
          <main className=' text-2xl flex-col gap-2'>
            <div className='flex flex-row gap-5'>
          <NavButton />
          </div>
          <UserProvider>
          {children}
          </UserProvider>
          </main>
          </SessionProvider>
        </body>
    </html>
  )
}
