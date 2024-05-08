import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import { getSession } from "next-auth/react"
import { POST } from './app/api/auth/[...nextauth]/route';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request })

    console.log(token, '미들웨어')
    // const session = await getSession({ req: request });

    // return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: ['/', '/movie', '/detail/:id*']
}