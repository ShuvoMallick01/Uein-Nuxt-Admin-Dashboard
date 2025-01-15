export function currency(amount: number, fraction = 2, currencyCode = "USD") {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: fraction,
  }).format(amount);
}

export function formatK(amount: number, fraction = 1, currencyCode = "USD") {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    notation: "compact",
    compactDisplay: "short",
    currency: currencyCode,
    maximumFractionDigits: fraction,
  }).format(amount);
}
