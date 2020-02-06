import 'package:dart_katas/pyramid_array.dart';
import 'package:test/test.dart';

void main() {
  void tester(int n, List<List<int>> exp) => test('Testing for $n', () => expect(pyramid(n), equals(exp)));
  group('basic tests', () {
    tester(0, []);
    tester(1, [[1]]);
    tester(2, [[1], [1, 1]]);
    tester(3, [[1], [1, 1], [1, 1, 1]]);
  });
}
