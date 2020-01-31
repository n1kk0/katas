List<num> tribonacci(List<num> signature, int n) {
  var tribonacci = signature;
  var i = 2;

  while(i < n) {
    tribonacci.add(tribonacci[i - 2] + tribonacci[i - 1] + tribonacci[i]);
    i++;
  }

  return tribonacci.sublist(0, n);
}
