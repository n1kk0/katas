from itertools import permutations as pm
import numpy as np


def permutations(string):
    '''
    best:
    return list("".join(p) for p in set(pm(string)))
    '''
    output = []

    for permutation_letters in pm(string):
        output.append("".join(permutation_letters))

    return np.unique(np.array(output))
