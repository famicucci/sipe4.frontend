import { NextResponse, NextRequest } from "next/server"
import { decodeJWT } from "./config/decoded"

const protectedRoutes = ["/precios", "/register"]
const publicRoutes = ["/login"]

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("userToken")?.value
  const decod = token ? await decodeJWT(token) : null

  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  if (isProtectedRoute && !token) {
    const response = NextResponse.redirect(new URL("/login", req.url))
    return response
  }

  if (token) {
    try {
      const decodedUser = decod.userType
    } catch (error) {
      const response = NextResponse.redirect(new URL("/login", req.url))
      response.cookies.delete("userToken")
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/:path*"],
}
