"use client"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { useForm } from "react-hook-form"
import { IconSearch } from "@/app/assets/icons"
import { getPricesRequest } from "@/services/getPricesRequest"
import { InputContainer } from "@/app/components/input"
export interface SearchProduct {
  Product: string
  search: string
}

const SearchProduct = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { handleSubmit, control, watch } = useForm<SearchProduct>()

  const searchValue = watch("search", "")

  const onSubmit = async (data: SearchProduct) => {
    dispatch(getPricesRequest(data.search))
  }

  useEffect(() => {
    dispatch(getPricesRequest(searchValue || ""))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, dispatch])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto py-2 relative w-1/4 ">
      <InputContainer
        control={control}
        name="search"
        type="text"
        placeholder="Escribe tu búsqueda"
      />
      <button className="absolute right-1 top-1/2 transform -translate-y-1/2">
        <IconSearch />
      </button>
    </form>
  )
}

export default SearchProduct
