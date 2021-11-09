/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const check = (string) => string === string.split('').reverse().join('')
    if (s === '') return '';
    let ans = s[0]
    
    for(let i=0; i<s.length; i++) {
        let lastIndex = s.slice(0, s.length).lastIndexOf(s[i])
        while(lastIndex !== i) {
            const currentStr = s.slice(i, lastIndex + 1)
            if(ans.length > currentStr.length) break;
            if(check(currentStr)){
                ans = currentStr
                break;
            }
            lastIndex = s.slice(0, lastIndex).lastIndexOf(s[i])
        }
    }
    return ans
};