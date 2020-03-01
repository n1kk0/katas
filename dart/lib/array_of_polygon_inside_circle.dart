import 'dart:math';

double areaOfPolygonInsideCircle(double circleRadius, int numberOfSides) {
  return double.parse(((pow(circleRadius, 2) * numberOfSides * sin((2 * pi) / numberOfSides)) / 2).toStringAsFixed(3));
}
