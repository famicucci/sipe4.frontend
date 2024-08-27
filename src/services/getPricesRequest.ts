import { createAsyncThunk } from "@reduxjs/toolkit"
import { Price } from "../redux/states/price"

export const getPricesRequest = createAsyncThunk<Price[], void>(
  "prices/getPricesRequest",
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("authToken")
      const response = await fetch("http://localhost:4000/prices", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }
)
