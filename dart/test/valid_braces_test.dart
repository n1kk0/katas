import 'package:dart_katas/valid_braces.dart';
import 'package:test/test.dart';

void main() {
  test('Valid braces', () {
    expect(validBraces('()'), isTrue);
    expect(validBraces('[(])'), isFalse);
    expect(validBraces('(){}[]'), isTrue);
    expect(validBraces('([{}])'), isTrue);
    expect(validBraces('[({})](]'), isFalse);
    expect(validBraces('(})'), isFalse);
  });
}
