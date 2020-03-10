int triangular(int n) {
  return n < 1 ? 0 : List.generate(n, (index) => index + 1).fold(0, (i, j) => i + j);
}
