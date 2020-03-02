def who_likes_it(names):
    message = ""

    if len(names) == 0:
        message = "no one likes this"
    elif len(names) == 1:
        message = "%s likes this" % names[0]
    elif len(names) == 2:
        message = "%s and %s like this" % (names[0], names[1])
    elif len(names) == 3:
        message = "%s, %s and %s like this" % (names[0], names[1], names[2])
    else:
        message = "%s, %s and %s others like this" % (
            names[0],
            names[1],
            len(names) - 2
        )

    return message
