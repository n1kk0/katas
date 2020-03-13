bool XO(str) {
  var xs = 0;
  var os = 0;

  str.split('').forEach((l) {
    switch(l.toLowerCase()) {
      case 'x': xs++; break;
      case 'o' : os++; break;
    }
  });

  return xs == os;
}
