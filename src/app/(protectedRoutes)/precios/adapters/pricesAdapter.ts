import { Price } from "@/redux/states/price"

const pricesAdapter = (prices: Price[]) => {
  return prices.map((item: Price) => {
    return {
      productCode: item.productCode,
      description: item.Product.description,
      amount: Number(item.amount),
    }
  })
}

export default pricesAdapter
