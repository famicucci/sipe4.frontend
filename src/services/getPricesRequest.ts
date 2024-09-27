import { createAsyncThunk } from "@reduxjs/toolkit"
import { Price } from "../redux/states/price"
import { RootState } from "../redux/store"
import { AppError } from "./errorRequest"
import { getToken } from "@/config/getCookie"
import { decodeJWT } from "@/config/decoded"

export const getPricesRequest = createAsyncThunk<
  Price[],
  void,
  { state: RootState }
>("prices/getPricesRequest", async (_, { rejectWithValue }) => {
  const token = await getToken()

  const baseUrl = process.env.NEXT_PUBLIC_LOCALHOST

  await new Promise((resolve) => setTimeout(resolve, 3000))

  const response = await fetch(`${baseUrl}/prices`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "user-token": token,
    },
  })
  const data = await response.json()

  if (!response.ok) {
    const error = new AppError(data.error, data.message, data.status)
    return rejectWithValue(error)
  }
  return data
})
