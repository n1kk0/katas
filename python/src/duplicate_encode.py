def duplicate_encode(word):
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
