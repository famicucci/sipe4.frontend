import { TableHead } from "./tableHead"

const Table = () => {
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
    {
      name: "Editar",
    },
  ]
  return (
    <table className="table-auto border-collapse w-full rounded">
      <TableHead columns={columns} />
      <tbody>
        <tr>
          <td>codigo</td>
          <td>descripcion</td>
          <td>precios</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
