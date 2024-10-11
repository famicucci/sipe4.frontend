import { PriceState } from "@/redux/states/price"
import { TableBody } from "./tableBody"
import { TableHead } from "./tableHead"

const Table = ({ prices, error, loading }: PriceState) => {
  const columns = [
    {
      name: "Código",
    },
    {
      name: "Descripción",
    },
    {
      name: "Precios",
    },
  ]
  return (
    <table className="table-auto border-collapse w-full rounded">
      <TableHead columns={columns} />
      <TableBody prices={prices} error={error} loading={loading} />
    </table>
  )
}

export default Table
