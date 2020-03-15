List<int> solve(List<String> arr) {
  final alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return arr.map(
    (chain) => chain.isEmpty ? 0 : chain.split('').asMap().map(
      (k, c) => MapEntry(k, alphabet.indexOf(c.toLowerCase()) == k ? 1 : 0)
    ).values.toList().reduce((s, i) => s + i)
  ).toList();
}
