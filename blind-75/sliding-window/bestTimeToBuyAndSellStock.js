/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let buyPrice = prices[0];
  for (let left = 0, right = 1; right < prices.length && left < right; null) {
    if (prices[left] < buyPrice) {
        buyPrice = prices[left];
    }
    if (prices[right] - buyPrice > maxProfit) {
        maxProfit = prices[right] - buyPrice;
    }
    left++;
    right++;
  }
  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([2,1,4]))