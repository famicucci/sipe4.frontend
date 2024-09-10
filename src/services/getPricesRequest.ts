import { createAsyncThunk } from "@reduxjs/toolkit"
import { Price } from "../redux/states/price"
import { AppError } from "./errorRequest"

export const getPricesRequest = createAsyncThunk<Price[], void>(
  "prices/getPricesRequest",
  async (_, { rejectWithValue }) => {
    const token = process.env.NEXT_PUBLIC_TOKEN
    const baseUrl = process.env.NEXT_PUBLIC_LOCALHOST

    await new Promise((resolve) => setTimeout(resolve, 3000))

    const response = await fetch(`${baseUrl}/prices`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const data = await response.json()

    if (!response.ok) {
      const error = new AppError(data.error, data.message)
      return rejectWithValue(error)
    }
    return data
  }
)
