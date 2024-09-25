import { configureStore } from "@reduxjs/toolkit"
import priceReducer from "./states/price"
import authReducer from "./states/user"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    price: priceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
