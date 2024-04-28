/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const expecting = [];

    for (let i = 0; i < s.length; i++) {
        switch (s[i]){
            case "{":
                expecting.push("}");
                break;
            case "(":
                expecting.push(")");
                break;
            case "[":
                expecting.push("]");
                break;
            case "}":
                if (expecting[expecting.length - 1] === "}") {
                    expecting.pop();
                } else {
                    return false;
                }
                break;
            case ")":
                if (expecting[expecting.length - 1] === ")") {
                    expecting.pop();
                } else {
                    return false;
                }
                break;
            case "]":
                if (expecting[expecting.length - 1] === "]") {
                    expecting.pop();
                } else {
                    return false;
                }
                break;
        }
    }

    if (expecting.length > 0) {
        return false;
    }

    return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));