int countSmileys(List<String> arr) {
  final  re = RegExp(r'^[\:\;][\-\~]?[\)D]$');

  return arr.fold(0, (v, e) => v += (re.hasMatch(e) ? 1 : 0));
}
