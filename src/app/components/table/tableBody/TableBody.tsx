"use client"
import { TableProps } from "../types"
import { useEffect, useRef } from "react"
import { RootState } from "@/redux/store"
import { useSelector, useDispatch } from "react-redux"
import { setLoading, setNewPage } from "@/redux/states/price"
import { getPricesRequest } from "@/services/getPricesRequest"

const TableBody = ({ data, columns }: TableProps): JSX.Element => {
  const dispatch = useDispatch()
  const isloading = useRef<any>(null)

  const { loading, newPage } = useSelector((state: RootState) => state.price)

  const scrollPrices = async () => {
    await getPricesRequest({
      searchValue: "",
      newPage: newPage,
    })
  }
  useEffect(() => {
    scrollPrices()
  }, [newPage])

  useEffect(() => {
    const observe = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        if (!loading) {
          dispatch(setLoading(true))
          dispatch(setNewPage(newPage + 1))
        }
      } else {
        dispatch(setLoading(false))
      }
    })
    if (isloading.current) {
      observe.observe(isloading.current)
    }
    return () => {
      observe.disconnect()
    }
  }, [])

  return (
    <>
      <tbody>
        {data.length > 0
          ? data.map((item: any, index: string) => (
              <tr key={index}>
                {columns.map((column: any) => (
                  <td
                    key={column.name}
                    style={{
                      textAlign: column.align as "left" | "right" | "center",
                    }}
                    className="py-5">
                    {column.cell
                      ? column.cell(item)
                      : item[column.selector as keyof typeof item]}
                  </td>
                ))}
              </tr>
            ))
          : null}
        <tr>
          {data.length > 0 && (
            <td
              ref={isloading}
              className="p-20 text-center flex justify-center">
              {loading && <div>Cargando...</div>}
            </td>
          )}
        </tr>
      </tbody>
    </>
  )
}

export default TableBody
