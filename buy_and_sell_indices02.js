var prices = [11, 12, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(analyzePrices(prices));

function analyzePrices(prices) {
  let buyIndex = 0;
  let sellIndex = 0;
  let profit = 0;

  // see
  for (let i = 0; i < prices.length; i++) {
    if (prices[buyIndex] > prices[i]) buyIndex = i;
  }

  if (buyIndex == prices.length - 1) {
    console.log(profit);
    return profit;
  } else {
    sellIndex = buyIndex + 1;
  }

  for (let j = buyIndex; j < prices.length; j++) {
    if (prices[sellIndex] < prices[j]) {
      sellIndex = j;
    }
  }

  profit = prices[sellIndex] - prices[buyIndex];

  console.log(profit);
  console.log(buyIndex);
  console.log(sellIndex);
  return profit;
}
