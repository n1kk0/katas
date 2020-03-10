import 'package:dart_katas/well.dart';
import 'package:test/test.dart';

void main() {
  group('basic tests', () {
    test("Testing for ['bad', 'bad', 'bad']", () =>
      expect(well(['bad', 'bad', 'bad']), equals('Fail!')));
    test("Testing for ['good', 'bad', 'bad', 'bad', 'bad']", () =>
      expect(well(['good', 'bad', 'bad', 'bad', 'bad']), equals('Publish!')));
    test("Testing for ['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']", () =>
      expect(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), equals('I smell a series!')));
  });
}
