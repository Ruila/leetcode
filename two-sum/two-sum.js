/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let x=0;x<nums.length;x++){
		let goal=target-nums[x];
		for(let y=x+1;y<=nums.length;y++){
			if(nums[y]===goal)
			    return [x,y];
        }
    }
};