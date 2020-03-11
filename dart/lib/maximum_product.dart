int adjacentElementsProduct(List<int> array) {
  int output;

  for (var i = 0; i < array.length - 1; i++) {
    if (output == null || array[i] * array[i + 1] > output) {
      output = array[i] * array[i + 1];
    }
  }

  return output;
}
