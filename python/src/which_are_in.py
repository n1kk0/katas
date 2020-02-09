def in_array(array1, array2):
    '''
    best: return sorted({sub for sub in a1 if any(sub in s for s in a2)})
    '''
    results = []

    for pattern in array1:
        for model in array2:
            if not pattern in results:
                if model.find(pattern) != -1:
                    results.append(pattern)

    results.sort()

    return results
