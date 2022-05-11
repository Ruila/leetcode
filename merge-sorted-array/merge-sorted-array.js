/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index = 0
    for(let i = m; i< m+n; i++){
        nums1[i] = nums2[index]
        index++;
    }
    for(let i =0; i<nums1.length-1; i++){
        for(let j = i+1; j<nums1.length; j++) {
            if(nums1[i]>nums1[j]) {
              let tmp = nums1[i]
            nums1[i]=nums1[j]
            nums1[j]=tmp   
            }
        }
    }
};