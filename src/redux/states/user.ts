import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { loginRequest } from "@/services/loginRequest"

export interface LoginResponse {
  success: string
  userType: string
}

interface AuthState {
  userType: string
  token: string
  loading: boolean
  error: any
}

const initialState: AuthState = {
  userType: "",
  token: "",
  loading: false,
  error: null,
}

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    handleLogin: (
      state,
      action: PayloadAction<{ token: string; userType: string }>
    ) => {
      state.token = action.payload.token
      state.userType = action.payload.userType
    },

    handleLogout: (state) => {
      state.userType = ""
      state.token = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginRequest.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        loginRequest.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.token = action.payload.success
          state.loading = false
        }
      )
      .addCase(loginRequest.rejected, (state, action) => {
        state.error = action.error.message
        state.loading = false
      })
  },
})

export const { handleLogin, handleLogout } = authSlice.actions
export default authSlice.reducer
