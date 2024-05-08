import axios from 'axios';
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { cookies } from 'next/headers';
import cookie from 'cookie';

const handler = NextAuth({
    secret: process.env.NEXT_AUTH_SECRET,
    callbacks: {
        async jwt({ token, account }) {
            if (account && account.type === 'credentials') {
                token.userId = account.providerAccountId
            }
            return token
        },
        async session({ session, token }) {
            return session
        },
    },
    pages: {
        signIn: '/'
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                id: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // credentials 타입에러
                // tsconfig에서 strict를 false로 바꾸면 해결됨
                // https://github.com/nextauthjs/next-auth/issues/2701
                const { id, password } = credentials;

                const auth = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/login`, {
                    id,
                    password
                })

                const setCookie = auth.headers['Set-Cookie'];

                // if (setCookie) {
                const parsed = cookie.parse('21442142421');
                cookies().set('connect.sid', parsed['connect.sid'], parsed);
                // }

                const data = auth.data;

                if (data) {
                    return data
                } else {
                    return null
                }
            }
        }),
    ]
})

export { handler as GET, handler as POST }