// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

//brute force solutions timeout on submission
// while loop (brute force)
var maxProfit = function(prices) {
  let max = 0;
  let left = 0;
  let right = 1;

  while (left <= prices.length -2) {
      if (prices[right] - prices[left] > max) {
          max = prices[right] - prices[left];
      }
      if (right === prices.length -1) {
          left++;
          right = left;
      }
      right++;
  }
  return max;
};

//for loop (brute force)
var maxProfit = function(prices) {
let max = 0;
for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j < pices.length; j++) {
        if (prices[j] - prices[i] > max) {
            max = prices[j] - prices[i];
        }
    }
}
return max;
}

//best runtime solution
var maxProfit = function(prices) {
    let lowest = +Infinity;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowest) lowest = prices[i];
        if (prices[i] - lowest > max) {
            max = prices[i] - lowest;
        }
    }
    return max;
};