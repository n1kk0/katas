import 'package:dart_katas/get_middle.dart';
import 'package:test/test.dart';

void main() {
  test('test', () => expect(getMiddle('test'), equals('es')));
  test('testing', () => expect(getMiddle('testing'), equals('t')));
  test('middle', () => expect(getMiddle('middle'), equals('dd')));
  test('A', () => expect(getMiddle('A'), equals('A')));
}
