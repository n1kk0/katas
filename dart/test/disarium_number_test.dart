import 'package:dart_katas/disarium_number.dart';
import 'package:test/test.dart';

void main() {
  group('Fixed tests', () {
    test('Testing for 89', () => expect(disariumNumber(89), equals('Disarium !!')));
    test('Testing for 564', () => expect(disariumNumber(564), equals('Not !!')));
    test('Testing for 1024', () => expect(disariumNumber(1024), equals('Not !!')));
    test('Testing for 135', () => expect(disariumNumber(135), equals('Disarium !!')));
    test('Testing for 136586', () => expect(disariumNumber(136586), equals('Not !!')));
  });
}
