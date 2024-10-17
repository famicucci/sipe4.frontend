"use client"
import { TableProps } from "../types"

const TableBody = ({ data, columns }: TableProps) => {
  return (
    <tbody>
      {data.length > 0 ? (
        <>
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((column: any) => (
                <td
                  key={column.name}
                  style={{
                    textAlign: `${column.align}` as "left" | "right" | "center",
                  }}
                  className="py-2">
                  {column.cell
                    ? column.cell(item)
                    : item[column.selector as keyof typeof item]}
                </td>
              ))}
            </tr>
          ))}
        </>
      ) : (
        <tr>
          <td className="text-center py-2">
            <p className="text-gray-600">No hay nada aun</p>
          </td>
        </tr>
      )}
    </tbody>
  )
}

export default TableBody
