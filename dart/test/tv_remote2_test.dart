import 'package:dart_katas/tv_remote2.dart';
import 'package:test/test.dart';

void main() {

  test('Example', () {
    expect(tv_remote('Too Easy?'), equals(71));
  });
  
  test('Lower', () {
    expect(tv_remote('does'),     equals(16));
    expect(tv_remote('your'),     equals(21));
    expect(tv_remote('solution'), equals(33));
    expect(tv_remote('work'),     equals(18));
    expect(tv_remote('for'),      equals(12));
    expect(tv_remote('these'),    equals(27));
    expect(tv_remote('words'),    equals(23));
  });
  
   test('Upper', () {
    expect(tv_remote('DOES'),     equals(19));
    expect(tv_remote('YOUR'),     equals(22));
    expect(tv_remote('SOLUTION'), equals(34));
    expect(tv_remote('WORK'),     equals(19));
    expect(tv_remote('FOR'),      equals(15));
    expect(tv_remote('THESE'),    equals(28));
    expect(tv_remote('WORDS'),    equals(24));
  });
  
   test('Symbols', () {
    expect(tv_remote('^does^'),               equals(33));
    expect(tv_remote('\$your\$'),             equals(53));
    expect(tv_remote('#solution#'),           equals(49));
    expect(tv_remote('\u00bfwork\u00bf'),     equals(34));
    expect(tv_remote('{for}'),                equals(38));
    expect(tv_remote('\u00a3these\u00a3'),    equals(57));
    expect(tv_remote('?symbols?'),            equals(54));
    expect(tv_remote('9u45U¿0v6s5h h2@75Fv'), equals(103));
    expect(tv_remote('..._^_--9__'),          equals(44));
  });
}
