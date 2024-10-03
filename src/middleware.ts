import { NextResponse, NextRequest } from "next/server"
import { decodeJWT } from "./config/decoded"

type RouteConfig = {
  isProtected: boolean
  requireRole: "admin" | "user"
}
type Routes = "/precios" | "/register" | "/admin" | "/login"

const routes: Record<Routes, RouteConfig> = {
  "/precios": { isProtected: true, requireRole: "user" },
  "/register": { isProtected: true, requireRole: "user" },
  "/admin": { isProtected: true, requireRole: "admin" },
  "/login": { isProtected: false, requireRole: "user" },
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("userToken")?.value
  const decod = token ? await decodeJWT(token) : null

  const path = req.nextUrl.pathname as Routes
  const currentRoute = routes[path]

  if (!currentRoute) {
    return NextResponse.next()
  }

  if (currentRoute.isProtected && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl))
  }

  if (token) {
    try {
      const userType = decod?.userType

      if (currentRoute.requireRole === "admin" && userType !== "admin") {
        return NextResponse.redirect(new URL("/error", req.nextUrl))
      }
    } catch (error) {
      const response = NextResponse.redirect(new URL("/login", req.nextUrl))
      response.cookies.delete("userToken")
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/:path*"],
}
