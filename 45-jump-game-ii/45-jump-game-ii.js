/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
   let count = 0
   let max = 0
   let now = 0
   for(let i=0 ; i<nums.length-1; i++) {
       max = Math.max(max, i+nums[i])
       if(i===now) {
           count ++;
           now = max
       }
   }
    return count
};