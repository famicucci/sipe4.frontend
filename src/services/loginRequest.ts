import { AppError } from "./errorRequest"

export interface LoginUser {
  user: string
  password: string
}

export interface LoginResponse {
  success: string
  userType: string
}
export const loginRequest = async (user: LoginUser): Promise<LoginResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_LOCALHOST

  await new Promise((resolve) => setTimeout(resolve, 3000))

  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(user),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new AppError(data.error, data.message, data.status)
  }
  return data
}
