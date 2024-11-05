const pricesAdapter = (data: any) => {
  return data.map((item: any) => {
    return {
      productCode: item.productCode,
      description: item["Product.description"],
      amount: item.amount,
    }
  })
}

export default pricesAdapter
