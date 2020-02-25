def anagrams(word, words):
    '''
    shortest: return [item for item in words if sorted(item)==sorted(word)]
    '''
    output = list()
    word = ''.join(sorted(word))

    for anagram in words:
        if word == ''.join(sorted(anagram)):
            output.append(anagram)

    return output
