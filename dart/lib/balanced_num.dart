String balancedNum(int numb) {
  final numl = numb.toString().length;
  final numa = numl > 2 ? numb.toString().split('') : [];

  return numl < 3 ||
    numa.take((numl / 2).floor() - (numl % 2 == 0 ? 1 : 0)).map((v) => int.parse(v)).reduce((v, e) => v + e) ==
    numa.getRange((numl / 2).ceil() + (numl % 2 == 0 ? 1 : 0), numl).map((v) => int.parse(v)).reduce((v, e) => v + e) ?
      'Balanced' : 'Not Balanced'
  ;
}
