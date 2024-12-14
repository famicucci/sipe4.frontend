"use client"
import { TableProps } from "../types"
import { useEffect, useState, useRef } from "react"
import { RootState, AppDispatch } from "@/redux/store"
import { useSelector, useDispatch } from "react-redux"
import { setLoading } from "@/redux/states/price"
import { getPricesRequest } from "@/services/getPricesRequest"

const TableBody = ({ data, columns }: TableProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>()
  const isLoading = useRef<any>(null)
  const [inScreen, setInScreen] = useState(false)

  const { loading, page, searchValue, hasMore } = useSelector(
    (state: RootState) => state.price,
  )

  useEffect(() => {
    const observed = new IntersectionObserver((entries) => {
      const isIntersecting = entries[0].isIntersecting
      if (isIntersecting) {
        // dispatch(setLoading(true));
        setInScreen(true)
      } else {
        setInScreen(false)
        // dispatch(setLoading(false));
      }
    })
    observed.observe(isLoading.current)

    return () => {
      observed.disconnect()
    }
  }, [])

  useEffect(() => {
    if (inScreen) {
      // llamar a la api
      console.log(page)
      if (hasMore) {
        dispatch(
          getPricesRequest({ searchValue: searchValue || "", page: page + 1 }),
        )
      }
    }
  }, [inScreen])

  return (
    <>
      <tbody>
        {data.map((item: any, index: string) => (
          <tr key={index}>
            {columns.map((column: any) => (
              <td
                key={column.name}
                style={{
                  textAlign: column.align as "left" | "right" | "center",
                }}
                className="py-5"
              >
                {column.cell
                  ? column.cell(item)
                  : item[column.selector as keyof typeof item]}
              </td>
            ))}
          </tr>
        ))}
        {hasMore && (
          <tr className="w-full m-10 text-center" ref={isLoading}>
            <td>
              <div>Cargando...</div>
            </td>
          </tr>
        )}
      </tbody>
    </>
  )
}

export default TableBody
