def maskify(cc):
    '''best: return "#" * (len(cc) - 4) + cc[-4:]'''
    out = ""
    counter = 0

    for letter in cc:
        if len(cc) - counter <= 4:
            out += letter
        else:
            out += "#"
        
        counter += 1

    return out
