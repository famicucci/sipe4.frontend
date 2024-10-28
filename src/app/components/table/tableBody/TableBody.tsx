"use client"
import { TableProps } from "../types"

const TableBody = ({ data, columns, loading }: TableProps) => {
  return (
    <tbody>
      {data.length > 0 ? (
        <>
          {data.map((item: { id: string }) => (
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
        <tr className="mx-auto text-center">
          {loading && <td>Cargando...</td>}
        </tr>
      )}
    </tbody>
  )
}

export default TableBody
