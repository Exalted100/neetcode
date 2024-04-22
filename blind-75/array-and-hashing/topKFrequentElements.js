/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const frequencyMap = {};

    for (let i = 0; i < nums.length; i++) {
        frequencyMap[nums[i]] = { frequency: frequencyMap[nums[i]]?.frequency ? frequencyMap[nums[i]].frequency + 1 : 1, value: nums[i]};
    }

    const objectKeys = Object.keys(frequencyMap);

    const finalArray = [];

    for (let i = 0; i < objectKeys.length; i++) {
        finalArray.push(frequencyMap[objectKeys[i]]);
    }

    const returnArray = finalArray.sort((a, b) => b.frequency - a.frequency).map(item => item.value);

    return returnArray.slice(0, k);
};

console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([1], 1));