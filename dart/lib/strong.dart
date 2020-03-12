String strong(int n) {
  return n < 3 || (n > 9 && n.toString()
    .split('')
    .reduce(
      (value, element) => (int.parse(value) + factorial(int.parse(element))).toString()
    ) == n.toString()) ?
      'STRONG!!!!' :
      'Not Strong !!'
  ;
}

int factorial(int n) {
  var f = 1;

  for (var i = 1; i <= n; i++) {
    f = f * i;
  }

  return f;
}
