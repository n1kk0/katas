import 'dart:math';

String disariumNumber(n) {
  return n
    .toString()
    .split('')
    .asMap()
    .map((key, value) => MapEntry(key, pow(int.parse(value), key + 1)))
    .values
    .reduce((value, element) => value + element) == n ?
      'Disarium !!':
      'Not !!'
  ;
}
