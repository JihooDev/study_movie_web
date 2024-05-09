// src/auth.ts
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import axios from 'axios';
import { IRegister, User } from './types/userTypes';

export const { signIn, signOut, handlers: { GET, POST }, auth } = NextAuth({
    ...authConfig,
    callbacks: {
        async session({ session, token, user }) {
            if (session.user) {
                const userData = session.user as User;
                session.user.id = userData.id;
                session.user.email = '';
                session.user.name = userData.name;
                session.user.image = '';
                session.user.emailVerified = null;
                return session;
            }

        },
        async jwt({ token, user, trigger, session }) {
            if (user) {
                token.user = user;
            }
            if (trigger === "update" && session) {
                token = { ...token, user: session }
                return token;
            };
            return token;
        },
    },
});