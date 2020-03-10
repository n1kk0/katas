import 'package:dart_katas/invite_more_women.dart';
import 'package:test/test.dart';

void main() {
  group('Basic tests', () {
    test('Testing for [1, -1, 1]', () => expect(inviteMoreWomen([1, -1, 1]), equals(true)));
    test('Testing for [-1, -1, -1]', () => expect(inviteMoreWomen([-1, -1, -1]), equals(false)));
    test('Testing for [1, -1]', () => expect(inviteMoreWomen([1, -1]), equals(false)));
    test('Testing for [1, 1, 1]', () => expect(inviteMoreWomen([1, 1, 1]), equals(true)));
  });
}
