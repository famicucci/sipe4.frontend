import { configureStore } from "@reduxjs/toolkit"
import  priceReducer  from "./states/price"

export const store = configureStore({
  reducer: {
    price: priceReducer,
  },
})
