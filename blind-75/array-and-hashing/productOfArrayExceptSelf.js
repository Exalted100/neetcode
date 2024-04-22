/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const prefix = [1];
    const postfix = [1];
    const finalArray = [];

    for (let i = 0; i < nums.length - 1; i++) {
        prefix.push(prefix[i] * nums[i]);
    }

    for (let i = nums.length - 1; i > 0; i--) {
        postfix.unshift(postfix[0] * nums[i]);
    }

    for (let i = 0; i < nums.length; i++) {
        finalArray.push(prefix[i] * postfix[i]);
    }

    return finalArray;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));