/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const map = {};
    const matches = [];
    const matchesMap = {};

    for (let i = 0; i < nums.length; i++) {
        for (let e = i+1; e < nums.length; e++) {
            if (map[0 - (nums[i] + nums[e])] && !matchesMap[[nums[i], nums[e], 0 - (nums[i] + nums[e])].sort().join()]) {
                matches.push([nums[i], nums[e], 0 - (nums[i] + nums[e])]);
                matchesMap[[nums[i], nums[e], 0 - (nums[i] + nums[e])].sort().join()] = true;
            }
        }
        map[nums[i]] = true;
    }

    return matches
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,1,1]))
console.log(threeSum([0,0,0]))