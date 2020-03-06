int find(List integers) {
  final odds = <int>[];
  final evens = <int>[];

  integers.forEach((element) {
    if (element % 2 == 0) {
      evens.add(element);
    } else {
      odds.add(element);
    }
  });

  return evens.length == 1 ? evens[0] : odds[0];
}
