import 'package:dart_katas/logistic_map.dart';
import 'package:test/test.dart';

void main() {
  test('Logistic Map', () {
    expect(logisticMap(3, 3, [0], [0]), equals([
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4]
    ]));

    expect(logisticMap(3, 3, [2], [2]), equals([
      [4, 3, 2],
      [3, 2, 1],
      [2, 1, 0]
    ]));

    expect(logisticMap(1, 1, [0], [0]), equals([[0]]));

    expect(logisticMap(5, 2, [0, 4], [0, 0]), equals([
      [0, 1, 2, 1, 0],
      [1, 2, 3, 2, 1]
    ]));

    expect(logisticMap(2, 2, [], []), equals([
      [null, null],
      [null, null]
    ]));
  });
}
