/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const sumArr = nums1.concat(nums2).sort((a, b) => a - b)
    if(sumArr.length % 2 === 0) {
        return (sumArr[sumArr.length/2-1] + sumArr[sumArr.length/2])/2
    } else {
        return sumArr[sumArr.length/2-0.5]
    }
};