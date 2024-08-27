import { configureStore } from "@reduxjs/toolkit"
import priceReducer from "./states/price"

export const store = configureStore({
  reducer: {
    price: priceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
