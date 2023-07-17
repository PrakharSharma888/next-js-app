import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const currentPath = request.nextUrl.pathname
    
    const isPublicPath = currentPath === "/login" || currentPath === "/signup"

    const token = request.cookies.get('token')?.value || ""
    console.log("Oh nooo!",token, isPublicPath);
    if( isPublicPath && token ){
        // can give simple redirect also
        return NextResponse.redirect(new URL('/profile', request.nextUrl))
    }
    else if ( !isPublicPath && !token){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/profile',
  ],
}