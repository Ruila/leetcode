/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits[digits.length-1] < 9) {
        digits[digits.length-1] += 1
    } else {
        for(let i = digits.length - 1; i>=0 ; i--){
            if(digits[i] === 9 && i!==0) {
               digits[i] = 0
            } else if(digits[i] === 9 && i===0) {
                digits[i] = 1
                digits[digits.length] = 0
                return digits
            } else {
                digits[i] += 1
                return digits
            }
        }
    }
    return digits
};