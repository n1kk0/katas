int minValue(List<int> arr) {
  final output = arr.toSet().toList().map((e) => e.toString()).toList();

  output.sort();

  return int.parse(output.reduce((a, b) => a + b));
}
