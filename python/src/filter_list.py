def filter_list(l):
  'return a new list with the strings filtered out'
  return list(filter(lambda x: type(x) is int, l))
