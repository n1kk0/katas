import 'package:dart_katas/tv_remote.dart';
import 'package:test/test.dart';

void main() {

  test('Example', () {
    expect(tv_remote('codewars'), equals(36));
  });
  
  test('Misc', () {
    expect(tv_remote('does'),     equals(16));
    expect(tv_remote('your'),     equals(23));
    expect(tv_remote('solution'), equals(33));
    expect(tv_remote('work'),     equals(20));
    expect(tv_remote('for'),      equals(12));
    expect(tv_remote('these'),    equals(27));
    expect(tv_remote('words'),    equals(25));
  });
}
