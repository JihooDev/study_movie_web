import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('next-auth.session-token');
    console.log(accessToken, '어세스 토큰');

    if (!accessToken) {
        return NextResponse.redirect(new URL("/", request.url));
    }
}

export const config = {
    matcher: ['/home', '/movie', '/detail/:id*']
}