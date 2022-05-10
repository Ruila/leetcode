/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0
    let max = 0
    let storeNegative = nums[0]
    for(let i=0; i<nums.length; i++){
        if(sum + nums[i] > 0) {
           sum = sum + nums[i]
        } else {
            sum = 0
        }
        if(sum>max) {
            max = sum
        }
        if(nums[i] > storeNegative) {
            storeNegative = nums[i]
        }
    }
    if(storeNegative!==0 && max === 0) {
        return storeNegative
    } else {
        return max   
    }
};