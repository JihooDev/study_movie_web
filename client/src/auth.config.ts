// src/auth.config.ts
import type { NextAuthConfig } from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import { IRegister, User } from './types/userTypes';
import axios from 'axios';

export const authConfig = {
    secret: process.env.NEXT_AUTH_SECRET,
    pages: {
        signIn: '/login',
    },
    providers: [
        credentials({
            async authorize(credentials) {
                const { id, password } = credentials;

                if (id && password) {
                    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/login`, {
                        id,
                        password
                    })

                    // 로그인 실패 처리
                    if (data.status !== 200) return null;

                    // 로그인 성공 처리
                    const resData = data.data as IRegister;

                    const user = {
                        id: resData.id ?? '',
                        name: resData.nickname ?? '',
                        email: resData.id ?? '',
                    } as User;

                    return {
                        ...user,
                        jihoo: 'klom'
                    };
                }
                return null;
            },
        })
    ]
} satisfies NextAuthConfig;