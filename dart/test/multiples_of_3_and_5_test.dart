import 'package:dart_katas/multiples_of_3_and_5.dart';
import 'package:test/test.dart';

void tester(int n, int exp) =>test('Testing for $n', () => expect(multiplesOf3And5(n), equals(exp)));

void main() {
  group('Basic tests', () {
    tester(10, 23);
    tester(20, 78);
    tester(200, 9168);
    tester(-1, 0);
  });
}
