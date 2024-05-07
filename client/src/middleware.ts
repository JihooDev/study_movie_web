import { GET, POST } from '@/app/api/auth/[...nextauth]/route';
import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: ['/home', '/movie', '/detail/:id*']
}