List<List<int>> pyramid(int n) {
  final pyramid = <List<int>>[];

  for (var i = 1; i <= n; i++) {
    pyramid.add(List<int>.filled(i, 1));
  }

  return pyramid;
}
