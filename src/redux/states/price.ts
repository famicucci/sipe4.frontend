import { createSlice } from "@reduxjs/toolkit"
interface PriceState {
  prices: { id: string; amount: string }[]
}

const initialState: PriceState = {
  prices: [
    { id: "1", amount: "1850.00" },
    { id: "2", amount: "1760.00" },
    { id: "3", amount: "1320.00" },
  ],
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
