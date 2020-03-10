String anchorize(String text){
  return text.replaceAllMapped(
    RegExp(r'(ftp|ftps|http|https|file|smb):\/\/[a-z-:/\.]+', caseSensitive: false),
    (Match match) => '<a href="${match[0]}">${match[0]}</a>'
  );
}
