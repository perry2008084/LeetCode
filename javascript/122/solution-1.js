const maxProfit = (prices) => {
  let len = prices.length;
  if (len < 2) {
    return 0;
  }

  let res = 0;
  for (let i = 1; i < len; i++) {
    let diff = prices[i] - prices[i - 1];
    if (diff > 0) {
      res += diff;
    }
  }

  return res; 
}

const input = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(input));