def remove_smallest(numbers):
    '''
    best :
    return n[:n.index(min(n))] + n[n.index(min(n)) + 1:] if n != [] else []
    '''
    output = list(numbers)
    sorted_list = list(numbers)
    sorted_list.sort()

    if len(output) > 0:
        output.remove(sorted_list[0])

    return output
