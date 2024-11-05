import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getPricesRequest } from "@/services/getPricesRequest"
import pricesAdapter from "@/adapters/pricesAdapter"

export interface Price {
  productCode: string
  amount: string
  Product: string
}
export interface PriceState {
  prices: Price[]
  loading: boolean
  error: any
  searchValue: string
}

const initialState: PriceState = {
  prices: [],
  loading: false,
  error: null,
  searchValue: "",
}

export const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setPrices: (state, action: PayloadAction<Price[]>) => {
      state.prices = action.payload
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
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

export const { setPrices, setSearchValue } = priceSlice.actions
export default priceSlice.reducer
