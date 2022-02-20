var maxProfit = function (prices = [7, 6, 4, 3, 1]) {
  var buyIndex = 0;
  var sellIndex = 0;
  var profit = 0;
  for (var i = 0; i < prices.length; i++) {
    if (prices[buyIndex] > prices[i]) {
      buyIndex = i;
    }
  }

  if (buyIndex == prices.length - 1) {
    console.log(profit);
    return profit;
  } else {
    sellIndex = buyIndex + 1;
  }

  for (var j = buyIndex; j < prices.length; j++) {
    if (prices[sellIndex] < prices[j]) {
      sellIndex = j;
    }
  }
  profit = prices[sellIndex] - prices[buyIndex];
  console.log(profit);
  return profit;
};
maxProfit();
