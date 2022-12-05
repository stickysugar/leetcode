/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * https://leetcode.com/problems/contains-duplicate/submissions/
 */
 var containsDuplicate = function(nums) {

  let ledger = {};

  for (let num of nums) {
      if (!ledger[num]) {
          ledger[num]= true;
      } else return true;
  }

  return false;
};

// better solution
var containsDuplicate = function(nums) {
    let set = new Set(nums);
    return (set.size < nums.length);
  };