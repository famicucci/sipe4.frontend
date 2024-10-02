import { NextResponse, NextRequest } from "next/server"
import { decodeJWT } from "./config/decoded"

const protectedRoutes = ["/precios", "/register"]
const publicRoutes = ["/precios", "/login"]
const routeAdmin = ["/admin"]

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("userToken")?.value
  const decod = token ? await decodeJWT(token) : null

  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
  const isRouteAdmin = routeAdmin.includes(path)

  if (isProtectedRoute && !token) {
    const response = NextResponse.redirect(new URL("/login", req.url))
    return response
  }

  if (isRouteAdmin && !token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  if (token) {
    try {
      const userType = decod?.userType
      if (isRouteAdmin && userType === "user") {
        const response = NextResponse.redirect(new URL("/error", req.url))
        return response
      }
    } catch (error) {
      const response = NextResponse.redirect(new URL("/login", req.url))
      response.cookies.delete("userToken")
      return response
    }
  }
  if (isPublicRoute && token && !req.nextUrl.pathname.startsWith("/precios")) {
    return NextResponse.redirect(new URL("/precios", req.nextUrl))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/:path*"],
}
