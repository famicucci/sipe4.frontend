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
  page: number
  hasMore: boolean
}

const initialState: PriceState = {
  prices: [],
  loading: false,
  error: null,
  searchValue: "",
  page: 0,
  hasMore: true,
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
      state.page = 1
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPricesRequest.pending, (state) => {
        state.loading = true
      })
      .addCase(getPricesRequest.fulfilled, (state, action) => {
        const adaptedPrices = pricesAdapter(action.payload.data)

        if (action.payload.page === 1) {
          state.prices = adaptedPrices
        } else {
          state.prices = [...state.prices, ...adaptedPrices]
        }

        if (action.payload.data.length < 20) {
          state.hasMore = false
        } else {
          state.hasMore = true
        }

        state.page = action.payload.page
        state.loading = false
      })
      .addCase(getPricesRequest.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  },
})

export const { setPrices, setSearchValue, setLoading, setPage } =
  priceSlice.actions
export default priceSlice.reducer
