import { TableHeadProp } from "./type"

const TableHead = ({ columns }: TableHeadProp) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <td key={column.name}>{column.name}</td>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
