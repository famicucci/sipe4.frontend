"use client"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { getPricesRequest } from "@/services/getPricesRequest"
import { Table } from "@/app/components/table"
import { formatDecimal } from "./utils"

const PricePage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { prices, loading, searchValue, page } = useSelector(
    (state: RootState) => state.price
  )

  useEffect(() => {
    dispatch(getPricesRequest({ searchValue: searchValue || "", page: 1 }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const columns = [
    {
      name: "Código",
      selector: "productCode",
      minWidth: "150px",
      align: "center",
    },
    {
      name: "Descripción",
      selector: "description",
      minWidth: "300px",
      align: "left",
    },
    {
      name: "Precios",
      selector: "amount",
      minWidth: "150px",
      align: "center",
      cell: (row: any) => formatDecimal(row.amount),
    },
  ]
  return <Table data={prices} columns={columns} loading={loading} />
}

export default PricePage
