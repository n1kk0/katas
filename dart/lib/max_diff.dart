int maxGap(List<int> nums) {
  var maxDiff = 0;
  nums.sort();

  for(var i = 0; i < nums.length - 1; i++) {
    maxDiff = maxDiff < nums[i + 1] - nums[i] ? nums[i + 1] - nums[i] : maxDiff;
  }

  return maxDiff;
}
