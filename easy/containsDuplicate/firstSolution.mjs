import test from "../../test.mjs";

const containsDuplicate = (nums) => {
  return new Set(nums).size !== nums.length;
};

test(containsDuplicate([1, 2, 3, 1]), true); // passed
test(containsDuplicate([1, 2, 3, 4]), false); // passed
test(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true); // passed
test(containsDuplicate([1, 5, -2, -4, 0]), false); // passed
