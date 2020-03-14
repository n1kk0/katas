List<int> incrementer(List<int> nums) {
  return nums.asMap().map((key, value) => MapEntry(key, int.parse((key + 1 + value).toString().split('').last))).values.toList();
}
