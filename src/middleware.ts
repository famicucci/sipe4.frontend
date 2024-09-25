import { NextResponse, NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("userToken")?.value

  if (req.nextUrl.pathname.startsWith("/app") && !token) {
    const response = NextResponse.redirect(new URL("/login", req.url))
    return response
  }
  // if (token && req.nextUrl.pathname === "/login") {
  //   return NextResponse.redirect(new URL("/precios", req.url))
  // }
  if (req.nextUrl.pathname.startsWith("/precios") && !token) {
    const response = NextResponse.redirect(new URL("/login", req.url))
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/:path*"],
}
