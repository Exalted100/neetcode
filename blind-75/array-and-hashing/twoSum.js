/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsObject = {};

    for (let i = 0; i < nums.length; i++) {
        if (numsObject[target - nums[i]] || numsObject[target - nums[i]] === 0) {
            return [i, numsObject[target - nums[i]]];
        }

        numsObject[nums[i]] = i;
    }

    return [];
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));