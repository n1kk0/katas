import 'package:dart_katas/minimum_steps.dart';
import 'package:test/test.dart';

void main() {
  group('Fixed tests', () {
    test('minimumSteps([4, 6, 3], 7)', () {
      expect(minimumSteps([4, 6, 3], 7), equals(1));
    });
    test('minimumSteps([10, 9, 9, 8], 17)', () {
      expect(minimumSteps([10, 9, 9, 8], 17), equals(1));
    });
    test('minimumSteps([8, 9, 10, 4, 2], 23)', () {
      expect(minimumSteps([8, 9, 10, 4, 2], 23), equals(3));
    });
    test('minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)', () {
      expect(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), equals(8));
    });
    test('minimumSteps([4, 6, 3], 2)', () {
      expect(minimumSteps([4, 6, 3], 2), equals(0));
    });

    test('minimumSteps([95, 6, 10, 2, 16, 59, 3, 79, 73, 3, 35, 87, 10, 9, 100, 9, 7, 86, 10, 36, 9, 1, 34, 75, 8, 2, 40, 10, 60, 30, 98, 5, 34, 10], 518)', () {
      expect(minimumSteps([95, 6, 10, 2, 16, 59, 3, 79, 73, 3, 35, 87, 10, 9, 100, 9, 7, 86, 10, 36, 9, 1, 34, 75, 8, 2, 40, 10, 60, 30, 98, 5, 34, 10], 518), equals(26));
    });
  });
}
