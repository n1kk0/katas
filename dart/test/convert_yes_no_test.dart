import 'package:dart_katas/convert_yes_no.dart';
import 'package:test/test.dart';

void main() {
  test('Tests', () {
    expect(bool_to_word(true), equals('Yes'));
    expect(bool_to_word(false), equals('No'));
  });
}
