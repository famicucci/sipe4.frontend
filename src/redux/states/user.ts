import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { loginRequest } from "@/services/loginRequest"

// const initialUser = () => {
//   const item = window.localStorage && window.localStorage.getItem("userData")
//   return item ? JSON.parse(item) : {}
// }
export interface User {
  user: string
  password: string
}
interface AuthState {
  user: User
  token: string | null
  loading: boolean
  error: any
}

const initialState: AuthState = {
  user: {
    user: "",
    password: "",
  },
  token: null,
  loading: false,
  error: null,
}

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    handleLogin: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    handleLogout: (state) => {
      state.user = { user: "", password: "" }
      state.token = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginRequest.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.loading = false
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  },
})

export const { handleLogin, handleLogout } = authSlice.actions
export default authSlice.reducer
