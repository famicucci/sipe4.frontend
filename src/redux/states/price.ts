import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getPricesRequest } from "@/services/getPricesRequest"
import pricesAdapter from "@/adapters/pricesAdapter"

export interface Product {
  description: string
}

export interface Price {
  productCode: string
  amount: string
  description: Product
}
export interface PriceState {
  prices: Price[]
  loading: boolean
  error: any
}

const initialState: PriceState = {
  prices: [],
  loading: false,
  error: null,
}

export const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setPrices: (state, action: PayloadAction<Price[]>) => {
      state.prices = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPricesRequest.pending, (state) => {
        state.loading = true
      })
      .addCase(getPricesRequest.fulfilled, (state, action) => {
        const adaptedPrices = pricesAdapter(action.payload)
        state.prices = adaptedPrices
        state.loading = false
      })
      .addCase(getPricesRequest.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  },
})

export const { setPrices } = priceSlice.actions
export default priceSlice.reducer
