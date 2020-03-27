import 'dart:math';
import 'package:dart_katas/brainluck.dart';
import 'package:test/test.dart';

void main() {
  group('basic tests', () {
    test(
      'test echo until byte 255 encountered',
      () => expect(
        brainLuck('[-.,+]', 'Codewars${String.fromCharCode(255)}'),
        equals('')
      )
    );

    test(
      'test echo until byte 255 encountered 2',
      () => expect(
        brainLuck(',+[-.,+]', 'Codewars${String.fromCharCode(255)}'),
        equals('Codewars')
      )
    );

    test(
      'hello world',
      () => expect(
        brainLuck(
          '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.',
          ''
        ),
        equals('Hello World!')
      )
    );

    test('multiplying', () {
      final r = Random();
      final nums = [ r.nextInt(sqrt(255).toInt()), r.nextInt(sqrt(255).toInt()) ];

      expect(
        brainLuck(
          ',>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.',
          String.fromCharCodes([nums[0], nums[1]])
        ),
        String.fromCharCode(nums[0] * nums[1])
      );
    });
  });
}
