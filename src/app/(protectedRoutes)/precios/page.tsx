"use client"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { getPricesRequest } from "@/services/getPricesRequest"
import { Table } from "@/app/components/table"
import { TableProps } from "@/app/components/table/types"
import { formatDecimal } from "./utils"
import pricesAdapter from "./adapters/pricesAdapter"

const PricePage = (): TableProps => {
  const dispatch = useDispatch<AppDispatch>()
  const { prices, loading, error } = useSelector(
    (state: RootState) => state.price
  )

  useEffect(() => {
    dispatch(getPricesRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dataTable = pricesAdapter(prices)

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
  return <Table dataTable={dataTable} columns={columns} loading={loading} />
}

export default PricePage
