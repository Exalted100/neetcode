/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    for (let left = 0, right = s.length - 1; (left < s.length || right >= 0); null) {
        if (s[left]?.toLowerCase() === s[right]?.toLowerCase()) {
            left++;
            right--;
        } else if (s[left]?.match(/[^a-zA-Z\d]/)) {
            left++;
        } else if (s[right]?.match(/[^a-zA-Z\d]/)) {
            right--;
        } else {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))