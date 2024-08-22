"use client"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

const Page: React.FC = () => {
  const prices = useSelector((state: RootState) => state.price.prices)

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
          {prices.map((price) => (
            <tr key={price.id}>
              <td>{price.id}</td>
              <td>producto</td>
              <td>${price.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Page
