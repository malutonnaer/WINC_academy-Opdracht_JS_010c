const calculateBasePrice = function (priceIncludingVAT, VATPercentage) {
  const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
  return basePrice;
};

// console.log(calculateBasePrice(100, 9));

const calculateBasePriceAndVAT = function (priceIncludingVAT, VATPercentage) {
  const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
  const VAT = priceIncludingVAT - basePrice;
  return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(100, 21));