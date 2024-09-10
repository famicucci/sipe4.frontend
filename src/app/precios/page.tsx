"use client"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { getPricesRequest } from "@/services/getPricesRequest"

const PricePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { prices, loading, error } = useSelector(
    (state: RootState) => state.price
  )

  useEffect(() => {
    dispatch(getPricesRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        {prices.length > 0 && (
          <tbody>
            {prices.map((price) => (
              <tr key={price.id}>
                <td>{price.id}</td>
                <td>producto</td>
                <td>${price.amount}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {error && <p>{JSON.stringify(error)}</p>}
      {loading && <p>Cargando...</p>}
    </div>
  )
}

export default PricePage
