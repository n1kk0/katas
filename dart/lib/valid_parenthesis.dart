bool validParentheses(String braces) {
  var openBraces = 0;
  var closeBraces = 0;
  var valid = true;

  braces.split('').forEach((element) {
    if (element == '(') {
      openBraces++;
    } else {
      if (closeBraces >= openBraces) {
        valid = false;
      }

      closeBraces++;
    }
  });

  return valid && openBraces == closeBraces;
}
