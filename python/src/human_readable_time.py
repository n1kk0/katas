import math


def make_readable(seconds):
    '''
    shortest:
    return '{:02}:{:02}:{:02}'.format(s / 3600, s / 60 % 60, s % 60)
    '''

    outHours = math.floor(seconds / 3600)
    outMinutes = math.floor((seconds - (outHours * 3600)) / 60)
    outSeconds = seconds - (outHours * 3600) - (outMinutes * 60)

    return str(outHours).rjust(2, '0') + ":" + \
        str(outMinutes).rjust(2, '0') + ":" + \
        str(outSeconds).rjust(2, '0')
