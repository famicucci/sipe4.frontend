import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getPricesRequest } from "@/services/getPricesRequest"
export interface Price {
  id: string
  amount: string
}
interface PriceState {
  prices: Price[]
}

const initialState: PriceState = {
  prices: [],
}

export const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setPrices: (state, action) => {
      state.prices = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPricesRequest.fulfilled, (state, action) => {
      state.prices = action.payload
    })
  },
})

export const { setPrices } = priceSlice.actions
export default priceSlice.reducer
    