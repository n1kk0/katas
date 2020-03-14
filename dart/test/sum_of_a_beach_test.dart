import 'package:dart_katas/sum_of_a_beach.dart';
import 'package:test/test.dart';

void testing(inp, exp) {
  test('Testing for $inp', () {
    expect(sumOfABeach(inp), equals(exp));
  });
}

void main() {
  group('Fixed tests', () {
    testing('SanD', 1);
    testing('sunshine', 1);
    testing('sunsunsunsun', 4);
    testing('123FISH321', 1);
    testing('weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn', 4);
    testing('sAnDsandwaTerwatErfishFishsunsunsandwater', 10);
    testing('joifjepiojfoiejfoajoijawoeifjowejfjoiwaefjiaowefjaofjwoj fawojef ', 0);
    testing('jwefjwjfsandsandwaterwaterfishfishsunsunsandwateriojwhefa;jawof;jawio;f', 10);
    testing('saNdsandwaterwAterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwater', 100);
    testing('sununsu', 1);
    testing('sandandndsansa', 1);
    testing('wateratertererwatewatwa', 1);
    testing('fishishshfisfi', 1);
  });
}