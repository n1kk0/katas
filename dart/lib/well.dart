String well(List<String> x) {
  final goodIdeas = x.where((element) => element == 'good').length;

  return goodIdeas > 2 ?
    'I smell a series!':
    goodIdeas < 1 ?
      'Fail!':
      'Publish!'
  ;
}
