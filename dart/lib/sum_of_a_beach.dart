int sumOfABeach(String beach) {
  return RegExp(r'sand|water|fish|sun', caseSensitive: false).allMatches(beach).length;
}
