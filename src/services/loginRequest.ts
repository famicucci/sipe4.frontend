import { createAsyncThunk } from "@reduxjs/toolkit"
import { AppError } from "./errorRequest"
import { LoginUser } from "@/app/login/page"
import { LoginResponse } from "@/redux/states/user"

export const loginRequest = createAsyncThunk<LoginResponse, LoginUser>(
  "user/loginRequest",
  async (user, { rejectWithValue }) => {
    // const token = process.env.NEXT_PUBLIC_TOKEN
    const baseUrl = process.env.NEXT_PUBLIC_LOCALHOST

    await new Promise((resolve) => setTimeout(resolve, 3000))

    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(user),
    })
    const data = await response.json()

    if (!response.ok) {
      const error = new AppError(data.error, data.message, data.status)
      return rejectWithValue(error)
    }
    return data
  }
)
