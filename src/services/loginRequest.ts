import { createAsyncThunk } from "@reduxjs/toolkit"
import { AppError } from "./errorRequest"
import { LoginUser } from "@/app/login/page"
import { LoginResponse } from "@/redux/states/user"
import { setToken } from "@/config/cookies"
import { setUserType } from "@/config/setUserType"

export const loginRequest = createAsyncThunk<LoginResponse, LoginUser>(
  "user/loginRequest",
  async (user, { rejectWithValue }) => {
    const baseUrl = process.env.NEXT_PUBLIC_LOCALHOST

    await new Promise((resolve) => setTimeout(resolve, 3000))

    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(user),
    })
    const data = await response.json()

    await Promise.all([setToken(data.success), setUserType(data.userType)])

    if (!response.ok) {
      const error = new AppError(data.error, data.message, data.status)
      return rejectWithValue(error)
    }
    return data
  }
)
