import { createSlice } from "@reduxjs/toolkit"

interface PriceState {
  prices: { id: string; amount: string }[]
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
})

export const { setPrices } = priceSlice.actions
export default priceSlice.reducer
