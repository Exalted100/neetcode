/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let longest = 0;
    for (let i = 0; i < s.length; i++) {
        let currentLength = 0;
        let movesLeft = k;
        for (let e = i; e < s.length; e++) {
            if (s[e] === s[i]) {
                currentLength++;
            } else if (movesLeft > 0) {
                movesLeft--;
                currentLength++;
            } else {
                break;
            }
            if (s.length - e === 1 && movesLeft) {
                i - movesLeft >= 0 ? currentLength += movesLeft : currentLength += i;
            }
        }
        currentLength > longest ? longest = currentLength : null;
    }

    return longest;
};

console.log(characterReplacement("ABAB", 2))
console.log(characterReplacement("AABABBA", 1))
console.log(characterReplacement("ABBB", 2))
console.log(characterReplacement("IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR", 2))
// IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR