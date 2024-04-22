/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxContent = 0;
  for (let left = 0, right = height.length - 1; left < right; null) {
    let currentContent;
    if (height[left] < height[right]) {
      currentContent = height[left] * (right - left);
      left++;
    } else {
      currentContent = height[right] * (right - left);
      right--;
    }
    currentContent > maxContent ? (maxContent = currentContent) : null;
  }
  return maxContent;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
