import { createAsyncThunk } from "@reduxjs/toolkit"
import { Price } from "../redux/states/price"
import { RootState } from "../redux/store"
import { AppError } from "./errorRequest"
import { getToken } from "@/config/getCookie"

export const getPricesRequest = createAsyncThunk<
  { data: Price[]; page: number },
  { searchValue: string; page: number },
  { state: RootState }
>(
  "prices/getPricesRequest",
  async ({ searchValue = "", page }, { rejectWithValue }) => {
    const token = await getToken()

    const baseUrl = process.env.NEXT_PUBLIC_LOCALHOST

    // await new Promise((resolve) => setTimeout(resolve, 3000))

    const response = await fetch(
      `${baseUrl}/prices?search=${searchValue}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "user-token": token,
        },
      },
    )
    const data = await response.json()

    if (!response.ok) {
      const error = new AppError(data.error, data.message, data.status)
      return rejectWithValue(error)
    }

    return { data, page }
  },
)
