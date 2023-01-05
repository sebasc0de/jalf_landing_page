export const priceFormatter = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const myPrice = formatter.format(price);
  return myPrice;
};
