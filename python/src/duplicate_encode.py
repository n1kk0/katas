def duplicate_encode(word):
    '''
    best:
    return "".join([
        "("
        if word.lower().count(letter) == 1
        else ")"
        for letter in word.lower()
    ])
    '''
    letters = {}
    out = ""

    for letter in word:
        if letters.get(letter.lower()):
            letters[letter.lower()] += 1
        else:
            letters[letter.lower()] = 1

    for letter in word:
        if letters[letter.lower()] > 1:
            out += ")"
        else:
            out += "("

    return out
