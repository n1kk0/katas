int firstNonConsecutive (List<int> arr) {
  var counter = arr[0] - 1;
  int val;

  arr.forEach((i) {
    val = val == null && i != counter + 1 ? i : val;
    counter = i;
  });

  return val;
}
