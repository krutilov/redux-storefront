export const formatPrice = (
  price: number,
  locale = "en-US",
  options = { style: "currency", currency: "USD" }
): string => {
  return new Intl.NumberFormat(locale, options).format(price);
};
