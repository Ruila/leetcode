/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    nums = nums.sort((a,b) => a-b)
    let len = nums.length;
    for(let i = 0; i < len; i++){
        if(nums[i] > 0){
            break;
        }
        if(i > 0 && nums[i] == nums[i - 1]){
            continue;
        }
        let temp = -nums[i]
        let a = i + 1
        let b = len - 1
        while(a < b){
            if(nums[a] + nums[b] === temp){
                res.push([nums[i],nums[a],nums[b]])
                while(a < b && nums[a] === nums[a+1]) a++;
                while(a < b && nums[b] === nums[b-1]) b--;
                a++;b--;
            }else if(nums[a] + nums[b] < temp){
                a++;
            }else if(nums[a] + nums[b] > temp){
                b--;
            }
        }
    }
    return res;
};