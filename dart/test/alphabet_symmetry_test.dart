import 'package:dart_katas/alphabet_symmetry.dart';
import 'package:test/test.dart';

void main() {
  group('Fixed tests', () {
    test('Testing for ["abode", "ABc", "xyzD"]', () {
      expect(solve(['abode', 'ABc', 'xyzD']), equals([4, 3, 1]));
    });
    test('Testing for ["abide", "ABc", "xyz"]', () {
      expect(solve(['abide', 'ABc', 'xyz']), equals([4, 3, 0]));
    });
    test('Testing for ["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]', () {
      expect(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc']), equals([6, 5, 7]));
    });
    test('Testing for ["encode", "abc", "xyzD", "ABmD"]', () {
      expect(solve(['encode', 'abc', 'xyzD', 'ABmD']), equals([1, 3, 1, 3]));
    });
    test('Testing for []', () {
      expect(solve([]), equals([]));
    });

    test('Testing for ["", "abcdEf", "bBQqvFETiJxLWDBmhrS", "AeGd", "rbIIEcwXipK", "WVCDEt", "ABvXEBgh", "AbjiOEgLXjonmnHSQRsXu", ""]', () {
      expect(
        solve(['', 'abcdEf', 'bBQqvFETiJxLWDBmhrS', 'AeGd', 'rbIIEcwXipK', 'WVCDEt', 'ABvXEBgh', 'AbjiOEgLXjonmnHSQRsXu', '']),
        equals([0, 6, 7, 2, 4, 3, 5, 10, 0])
      );
    });
  });
}
