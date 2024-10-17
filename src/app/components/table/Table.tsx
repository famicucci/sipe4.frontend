import { TableProps } from "./types"
import { TableBody } from "./tableBody"
import { TableHead } from "./tableHead"

const Table = ({ prices, columnsPrice }: TableProps) => {
  return (
    <table className="table-auto border-collapse w-full rounded">
      <TableHead columnsPrice={columnsPrice} />
      <TableBody prices={prices} columnsPrice={columnsPrice} />
    </table>
  )
}

export default Table
