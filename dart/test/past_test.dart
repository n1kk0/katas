import 'package:dart_katas/past.dart';
import 'package:test/test.dart';

void main() {
  group('Basic tests', () {
    test('past(0, 1, 1)', () => expect(past(0, 1, 1), equals(61000)));
    test('past(1, 1, 1)', () => expect(past(1, 1, 1), equals(3661000)));
    test('past(0, 0, 0)', () => expect(past(0, 0, 0), equals(0)));
    test('past(1, 0, 1)', () => expect(past(1, 0, 1), equals(3601000)));
    test('past(1, 0, 0)', () => expect(past(1, 0, 0), equals(3600000)));
  });
}
