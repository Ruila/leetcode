/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs == null || strs.length == 0) return "";
    let same = strs[0];
    for(let i = 1 ; i<strs.length ; i++){
        let str = strs[i];
        let j = 0;
        for(; j < same.length ; j++){
           if(same[j] != str.charAt(j)){
                break;
           } 
        }
        same = same.slice(0,j);
    }

    return same;
};