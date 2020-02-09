int nbYear(int p0, double percent, int aug, int p) {
  var duration = 0;

  while ( p0 < p) {
    p0 += aug + (p0 / 100 * percent).round();
    duration++;
  }

  return duration;
}
