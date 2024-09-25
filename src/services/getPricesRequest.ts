import { createAsyncThunk } from "@reduxjs/toolkit"
import { Price } from "../redux/states/price"
import { RootState } from "../redux/store"
import { AppError } from "./errorRequest"

export const getPricesRequest = createAsyncThunk<
  Price[],
  void,
  { state: RootState }
>("prices/getPricesRequest", async (_, { rejectWithValue, getState }) => {
  const state = getState()
  const token = state.auth.success

  const baseUrl = process.env.NEXT_PUBLIC_LOCALHOST

  await new Promise((resolve) => setTimeout(resolve, 3000))

  const response = await fetch(`${baseUrl}/prices`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "user-token": token,
    },
  })
  const data = await response.json()
  console.log("este es el token de getprices", token)

  if (!response.ok) {
    const error = new AppError(data.error, data.message, data.status)
    return rejectWithValue(error)
  }

  return data
})
