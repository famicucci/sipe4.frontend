"use server"
import { cookies } from "next/headers"

export const setUserType = async (type: any) => {
  const nextCookies = cookies()
  return nextCookies.set("userType", type)
}
