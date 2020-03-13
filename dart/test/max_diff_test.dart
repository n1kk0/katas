import 'package:dart_katas/max_diff.dart';
import 'package:test/test.dart';

void main() {
  group('Fixed tests', () {
    test('Testing for [13, 10, 2, 9, 5]', () {
      expect(maxGap([13, 10, 2, 9, 5]), 4);
    });
    test('Testing for [13, 3, 5]', () {
      expect(maxGap([13, 3, 5]), 8);
    });
    test('Testing for [24, 299, 131, 14, 26, 25]', () {
      expect(maxGap([24, 299, 131, 14, 26, 25]), 168);
    });
    test('Testing for [-3, -27, -4, -2]', () {
      expect(maxGap([-3, -27, -4, -2]), 23);
    });
    test('Testing for [-7, -42, -809, -14, -12]', () {
      expect(maxGap([-7, -42, -809, -14, -12]), 767);
    });
    test('Testing for [12, -5, -7, 0, 290]', () {
      expect(maxGap([12, -5, -7, 0, 290]), 278);
    });
    test('Testing for [-54, 37, 0, 64, -15, 640, 0]', () {
      expect(maxGap([-54, 37, 0, 64, -15, 640, 0]), 576);
    });
    test('Testing for [130, 30, 50]', () {
      expect(maxGap([130, 30, 50]), 80);
    });
    test('Testing for [1, 1, 1]', () {
      expect(maxGap([1, 1, 1]), 0);
    });
    test('Testing for [-1, -1, -1]', () {
      expect(maxGap([-1, -1, -1]), 0);
    });
  });
}
