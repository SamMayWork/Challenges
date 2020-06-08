// LEETCODE Challenge - Two Sum
// https://leetcode.com/problems/two-sum/
// Completed 2020/06/08

func twoSum(nums []int, target int) []int {
	for i := 0; i < len(nums); i++ {
		var remaining int = target - nums[i];
		for j := i+1; j < len(nums); j++ {
			if nums[j] == remaining {
				return [] int {i, j}
			}
		}
	}

	return [] int {0, 0}
}