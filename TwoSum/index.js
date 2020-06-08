// LEETCODE Challenge - Two Sum
// https://leetcode.com/problems/two-sum/
// Completed 2020/06/08

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      let remaining = target - nums[i];
      for (let j = i+1; j < nums.length; j++) {
        if (nums[j] == remaining) {
          return [i, j];
        }
      }
    }
};