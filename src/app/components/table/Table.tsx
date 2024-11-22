import { TableProps } from "./types"
import { TableBody } from "./tableBody"
import { TableHead } from "./tableHead"

const Table = ({ data, columns, loading }: TableProps) => {
  return (
    <table className="table-auto border-collapse w-full rounded">
      <TableHead columns={columns} />
      <TableBody data={data} columns={columns} loading={loading} />
    </table>
  )
}

export default Table
