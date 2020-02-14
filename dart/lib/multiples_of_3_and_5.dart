int multiplesOf3And5(int n) {
  final multiples = <int>[];

  for (var i = 1; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      multiples.add(i);
    }
  }

  return multiples.isNotEmpty ? multiples.reduce((a, b) => a + b) : 0;
}
