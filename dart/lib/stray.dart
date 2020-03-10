int stray(numbers) {
  final base = numbers[0] == numbers[1] ? numbers[0] : numbers[0] == numbers[2] ? numbers[0] : numbers[1];

  return (numbers as List<int>).firstWhere((element) => element != base);
}
