import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient } from "@prisma/client"
import {compare} from 'bcrypt'
import { getUserData } from '@/db/accessor/user_accessor'

type User = {
  name: string,
  email: string,
  image: string,
}

const handler = NextAuth({
        session: {
          strategy: 'jwt'
        },
        providers: [
            GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
            }
          }),
          CredentialsProvider({
            name: 'Credentials',
            credentials: {
              email: {},
              password: {}
            },
            async authorize(credentials, req): Promise<User | null> {
              // You need to provide your own logic here that takes the credentials
              // submitted and returns either a object representing a user or value
              // that is false/null if the credentials are invalid.
              // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
              // You can also use the `req` object to obtain additional parameters
              // (i.e., the request IP address)
              console.log(credentials?.email)
              const prisma = new PrismaClient();
              try {
                const res = await prisma.user.findUniqueOrThrow({
                  where: {
                      email: credentials?.email,
                    }
                })
                console.log(res.image);
                if (res) {
                  
                  const correctPass = await compare(credentials?.password || "", res.password);
                  console.log(correctPass)
                  console.log(credentials?.password)
                  if (correctPass) {
                    return Promise.resolve({name: res.name || "", email: res.email, image: res.image || "" });
                  }
                  else {
                    return Promise.resolve(null);
                  }
                }
                else {
                  return Promise.resolve(null);
                }
              }
              catch (err) {
                console.log(err);
                return Promise.resolve(null)
              }
            }
          })
        ],
        pages: {
          signIn: '/login'
        },
        callbacks: {
          async jwt({token, account, profile}) {
            
            if (token && token.email) {
              console.log(`token: ${token.email}, ${token.name},${token.picture}`)
              return token
            }
          }
        }
        
        
})

export { handler as GET, handler as POST }