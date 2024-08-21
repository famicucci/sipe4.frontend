import { UseSelector, useDispatch } from "react-redux"

const Page: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>$50.000</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>$40.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Page
