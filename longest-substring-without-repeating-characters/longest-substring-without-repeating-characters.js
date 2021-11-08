/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let arr = [];
    let maxLen = 0;
    for(let i=0; i<s.length; i++){
        if(arr.indexOf(s[i]) !== -1){
            arr = arr.slice(arr.indexOf(s[i])+1);
        };
        arr.push(s[i]);
        if(maxLen < arr.length){
            maxLen = arr.length;
        }
    };
    return maxLen;
};