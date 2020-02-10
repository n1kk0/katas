String brainLuck(String code, String input) {
  final tape = List<int>.filled(30000, 0);
  final bracketsStack = <int>[];
  final bracketsRelations = <int, int>{};
  var tapePointer = 0;
  var instructionPointer = 0;
  var out = '';

  for (var i = 0; i < code.length; i++) {
    if (code[i] == '[') {
      bracketsStack.add(i);
    } else if (code[i] == ']') {
      bracketsRelations[bracketsStack.removeLast()] = i;
    }
  }

  while (instructionPointer < code.length) {
    switch (code[instructionPointer]) {
      case '[':
        if (tape[tapePointer] == 0) {
          instructionPointer = bracketsRelations[instructionPointer] - 1;
        }

        break;
      case ']':
        if (tape[tapePointer] != 0) {
          instructionPointer = bracketsRelations.keys.firstWhere((k) => bracketsRelations[k] == instructionPointer);
        }

        break;
      case '<':
        if (tapePointer > 0) {
          tapePointer--;
        }

        break;
      case '>':
        if (tapePointer < 30000) {
          tapePointer++;
        }

        break;
      case '+':
        if (tape[tapePointer] == 255) {
          tape[tapePointer] = 0;
        } else {
          tape[tapePointer]++;
        }

        break;
      case '-':
        if (tape[tapePointer] == 0) {
          tape[tapePointer] = 255;
        } else {
          tape[tapePointer]--;
        }

        break;
      case ',':
        tape[tapePointer] = input.codeUnitAt(0);
        input = input.substring(1);
        break;
      case '.':
        out += String.fromCharCode(tape[tapePointer]);
        break;
    }

    instructionPointer++;
  }

  return out;
}
