"use client"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "@/redux/store"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { IconSearch } from "@/app/assets/icons"
import { setSearchValue } from "@/redux/states/price"
import { getPricesRequest } from "@/services/getPricesRequest"
import { InputView } from "@/app/components/input"

const SearchProduct = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()

  const searchValue = useSelector((state: RootState) => state.price.searchValue)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const initialSearchParams = {
      ...Object.fromEntries(searchParams.entries()),
      search: searchValue,
    }
    const query = `${pathname}?${Object.entries(initialSearchParams)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")}`

    router.push(query)
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const search = searchParams.get("search") || ""
    dispatch(getPricesRequest(search))
    setSearchValue(search)
  }, [searchParams])

  return (
    <form onSubmit={onSubmit} className="mx-auto py-2 relative w-1/4 ">
      <InputView
        name="search"
        type="text"
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        placeholder="Escribe tu búsqueda"
        className="shadow appearance-none border rounded-xl w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button className="absolute right-1 top-1/2 transform -translate-y-1/2">
        <IconSearch />
      </button>
    </form>
  )
}

export default SearchProduct
