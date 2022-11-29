/*
https://leetcode.com/problems/two-sum/

use two pointers, left, right
start left at 0
start right at 1

while pointer left is <= arr length -1
check if left + right = target
if right == arr.length -1, left ++
if not, move right +1
*/

var twoSum = function(nums, target) {
   let left = 0
   let right = 1

   while (nums.length -1 >= left) {
       if (nums[left] + nums[right] === target) {
           return [left, right];
       }

       if (right === nums.length -1) {
           left++;
           right = left +1;
       }

       else {
           right++;
       }
   }
};