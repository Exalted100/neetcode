/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sMap = {};

    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] ? sMap[s[i]]++ : sMap[s[i]] = 1;
    }

    for (let i = 0; i < t.length; i++) {
        if (!sMap[t[i]]) {
            return false;
        } else {
            sMap[t[i]]--;
        }
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
