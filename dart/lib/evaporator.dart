int evaporator(double content, double evap_per_day, double threshold){
  var days = 0;
  var full = 100.0;

  while (threshold <= full) {
    full -= (full / 100) * evap_per_day;
    days++;
  }

  return days;
}
