int minimumSteps(List<int> nums, int value) {
  nums.sort();
  var step = 0;
  var total = nums[0];

  while (total < value) {
    total += nums[step + 1];
    step++;
  }

  return step;
}
