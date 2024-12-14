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
  const [screen, setInscreen] = useState(false)

  const { loading, page, searchValue } = useSelector(
    (state: RootState) => state.price
  )
  useEffect(() => {
    const observed = new IntersectionObserver((entries) => {
      const isIntersecting = entries[0].isIntersecting
      if (isIntersecting) {
        if (!screen) {
          dispatch(setLoading(true))
          setInscreen(true)
        }
        // dispatch(getPricesRequest({ searchValue, page: page + 1 }))
      } else {
        setInscreen(false)
        dispatch(setLoading(false))
      }
    })
    observed.observe(isLoading.current)

    return () => {
      observed.disconnect()
    }
  }, [])

  useEffect(() => {
    const observed = new IntersectionObserver((entries) => {
      const isIntersecting = entries[0].isIntersecting
      if (isIntersecting) {
        dispatch(setLoading(true))
        dispatch(getPricesRequest({ searchValue, page: page + 1 }))
      } else {
        dispatch(setLoading(false))
      }
    })
    observed.observe(isLoading.current)

    return () => {
      observed.disconnect()
    }
  }, [dispatch, searchValue, page])

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
        <tr className="w-full m-10 text-center" ref={isLoading}>
          <td>{loading && <div>Cargando...</div>}</td>
        </tr>
      </tbody>
    </>
  )
}

export default TableBody
