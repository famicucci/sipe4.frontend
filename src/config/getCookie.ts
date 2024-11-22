"use server"
import { cookies } from "next/headers"

export const getToken = async () => {
  const nextCookies = cookies()
  const token = nextCookies.get("userToken")?.value || "no-token"
  return token
}
