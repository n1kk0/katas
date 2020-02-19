from itertools import permutations as pm
import numpy as np 

def permutations(string):
    '''
    best:
    return list("".join(p) for p in set(pm(string)))
    '''
    output = []

    for permutationLetters in pm(string):
        output.append("".join(permutationLetters))

    return np.unique(np.array(output))
