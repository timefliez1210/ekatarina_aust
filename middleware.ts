import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // If at root, redirect to /ru
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/ru', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/']
};
