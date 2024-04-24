/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let currentLength = 0;
    let start = 0;
    let used = {};

    for (let i = 0; i < s.length; i++) {
        if (used[s[i]]) {
            used = {};
            currentLength > maxLength ? maxLength = currentLength : null;
            currentLength = 0;
            i = start;
            start++;
        } else {
            used[s[i]] = true;
            currentLength++;
        }

        if (i === s.length - 1) {
            currentLength > maxLength ? maxLength = currentLength : null;
        }
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring(" "))
console.log(lengthOfLongestSubstring("aab"))