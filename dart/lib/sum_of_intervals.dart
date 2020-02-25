int sumOfIntervals(List<List<int>> intervals) {
  final used = <int, bool>{};

  return intervals.fold(0, (previousValue, element) {
    for (var i = element.first; i < element.last; i++) {
      if (used[i] == null) {
        previousValue++;
        used[i] = true;
      }
    }

    return previousValue;
  });
}
