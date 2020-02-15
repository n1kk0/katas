def spin_words(sentence):
    words = sentence.split(" ")
    output = []

    for word in words:
        if len(word) > 4:
            word = word[::-1]

        output.append(word)

    return " ".join(output)
