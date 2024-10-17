"use client"
import { TableProps } from "../types"

const TableBody = ({ prices, columnsPrice }: TableProps) => {
  return (
    <tbody>
      {prices.length > 0 ? (
        <>
          {prices.map((item) => (
            <tr key={item.id}>
              {columnsPrice.map((column: any) => (
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
            <p className="text-red-400">No se muestran los Precios</p>
          </td>
        </tr>
      )}
    </tbody>
  )
}

export default TableBody
