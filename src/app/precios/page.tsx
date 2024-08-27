"use client"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { getPricesRequest } from "@/services/getPricesRequest"

const Page: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const prices = useSelector((state: RootState) => state.price.prices)

  useEffect(() => {
    dispatch(getPricesRequest())
  }, [dispatch])

  console.log(prices)

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
