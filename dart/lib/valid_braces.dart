class BracesCounter {
  final braceTypes = {'[': ']', '{': '}', '(': ')'};
  final braces = <String>[];
  bool isValid = true;

  void addItem(String item) {
    if (braceTypes.containsKey(item)) {
      braces.add(item);
    }

    if (braceTypes.containsValue(item)) {
      if (braces.isNotEmpty) {
        isValid = braces.last == braceTypes.keys.firstWhere(
          (k) => braceTypes[k] == item
        );

        braces.removeLast();
      } else {
        isValid = false;
      }
    }
  }

  bool checkValid() {
    return isValid && braces.isEmpty;
  }
}

bool validBraces(String braces) {
  final bracesCounter = BracesCounter();

  braces.split('').forEach((element) {
    bracesCounter.addItem(element);
  });

  return bracesCounter.checkValid();
}
