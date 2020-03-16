List<int> rowWeights(List<int> arr) {
  final output = [0, 0];

  arr.asMap().forEach((key, value) {
    output[key % 2] += value;
  });

  return output;
}
