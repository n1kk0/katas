String longestConsec(strarr, k) {
  final outputStrings = <String>[];
  var output = '';

  if (k > 0 && strarr.isNotEmpty && k <= strarr.length) {
    for (var i = 0; i <= strarr.length - k; i++) {
      outputStrings.add(strarr.getRange(i, strarr.length).take(k).join(''));
    }

    output = outputStrings.fold("", (previousValue, element) => element.length > previousValue.length ? element : previousValue);
  } 

  return output;
}
