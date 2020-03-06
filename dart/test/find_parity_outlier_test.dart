import 'package:dart_katas/find_parity_outlier.dart';
import 'package:test/test.dart';

void main() {
  test('Find parity outlier 1', () => expect(find([99, 77, 331, 717, 89, 22073, 8, 7, 101]), equals(8)));
  test('Find parity outlier 2', () => expect(find([2254, 29, 98427000020]), equals(29)));
}
