import 'package:dart_katas/longest_consec.dart';
import 'package:test/test.dart';

void testing(strarr, k, exp) {
  test('longestConsec([${strarr.map((x) => "'$x'").join(', ')}], $k)', () {
    expect(longestConsec(strarr, k), equals(exp));
  });
}

void main() {
  group('Longest consecutive strings', () {
    testing(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2, 'abigailtheta');
    testing(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1, 'oocccffuucccjjjkkkjyyyeehh');
    testing([], 3, '');
    testing(['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'], 2, 'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck');
    testing(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2, 'wlwsasphmxxowiaxujylentrklctozmymu');
    testing(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2, '');
    testing(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3, 'ixoyx3452zzzzzzzzzzzz');
    testing(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15, '');
    testing(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0, '');
  });
}
