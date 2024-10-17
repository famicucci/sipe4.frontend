import { TableHeadProp } from "./type"

const TableHead = ({ columnsPrice }: TableHeadProp) => {
  return (
    <thead>
      <tr>
        {columnsPrice.map((column) => (
          <th
            className="p-3 first:rounded-tl-lg last:rounded-tr-lg"
            key={column.name}>
            {column.name}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
