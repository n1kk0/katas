def remove_smallest(numbers):
    '''best : return n[:n.index(min(n))] + n[n.index(min(n)) + 1:] if n != [] else []'''
    output = list(numbers)
    sortedList = list(numbers)
    sortedList.sort()

    if len(output) > 0:
        output.remove(sortedList[0])

    return output
