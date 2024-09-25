"use server"
import { cookies } from "next/headers"

export const setToken = async (token: any) => {
  const nextCookie = cookies()
  return nextCookie.set("userToken", token)
}
