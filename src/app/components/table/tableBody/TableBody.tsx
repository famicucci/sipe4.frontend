import { PriceState } from "@/redux/states/price"

const TableBody: React.FC<PriceState> = ({ prices, error }) => {
  return (
    <tbody>
      {prices.length > 0 ? (
        prices.map((price) => (
          <tr key={price.id}>
            <td>{price.id}</td>
            <td>producto</td>
            <td>${price.amount}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td className="text-center">
            {error && <p>{JSON.stringify(error)}</p>}
          </td>
        </tr>
      )}
    </tbody>
  )
}

export default TableBody
