import 'package:dart_katas/sum_of_intervals.dart';
import 'package:test/test.dart';

void main() {
  group('basic tests', () {
    test('Testing for [[1, 5]]', () => expect(sumOfIntervals([[1, 5]]), equals(4)));
    test('Testing for [[1, 5], [6, 10]]', () => expect(sumOfIntervals([[1, 5], [6, 10]]), equals(8)));
    test('Testing for [[1, 5], [1, 5]]', () => expect(sumOfIntervals([[1, 5], [1, 5]]), equals(4)));
    test('Testing for [[1, 4], [7, 10], [3, 5]]', () => expect(sumOfIntervals([[1, 4], [7, 10], [3, 5]]), equals(7)));
  });
}
