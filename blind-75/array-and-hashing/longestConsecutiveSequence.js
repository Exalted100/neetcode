/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//     const orderArray = [];
//     const negativeOrdersArray = [];

//     for (let i = 0; i < nums.length; i++) {
//         nums[i] >= 0 ? orderArray[nums[i]] = true: negativeOrdersArray[nums[i] * -1] = true;
//     }

//     let longest = 0;
//     let current = 0;

//     negativeOrdersArray.reverse();
//     negativeOrdersArray.pop();

//     const jointArray = [...negativeOrdersArray, ...orderArray];

//     for (let i = 0; i < jointArray.length; i++) {
//         if (jointArray[i]) {
//             current++
//             current > longest ? longest = current : null;
//         } else {
//             current = 0;
//         }
//     }

//     return longest;
// };

var longestConsecutive = function(nums) {
    const mapSet = {};
    let longest = 0;
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        mapSet[nums[i]] = true;
    }

    for (let i = 0; i < nums.length; i++) {
        if (mapSet[nums[i] - 1]) {
            continue;
        }
        current++;
        let currentNumber = nums[i];

        do {
            if (!mapSet[currentNumber + 1]) {
                break;
            } else {
                currentNumber++
                current++
            }
        } while (true)
        current > longest ? longest = current : null
        current = 0;
    }

    return longest;
};

console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
console.log(longestConsecutive([-1,0]))
console.log(longestConsecutive([0]))