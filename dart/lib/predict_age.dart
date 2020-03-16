import 'dart:math';

int predictAge(int age1,int age2, int age3, int age4, int age5, int age6, int age7, int age8) {
  return (sqrt(pow(age1, 2) + pow(age2, 2) + pow(age3, 2) + pow(age4, 2) + pow(age5, 2) + pow(age6, 2) + pow(age7, 2) + pow(age8, 2)) / 2).floor();
}
