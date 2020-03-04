import math


def make_readable(seconds):
    '''
    shortest:
    return '{:02}:{:02}:{:02}'.format(s / 3600, s / 60 % 60, s % 60)
    '''

    out_hours = math.floor(seconds / 3600)
    out_minutes = math.floor((seconds - (out_hours * 3600)) / 60)
    out_seconds = seconds - (out_hours * 3600) - (out_minutes * 60)

    return str(out_hours).rjust(2, '0') + ":" + \
        str(out_minutes).rjust(2, '0') + ":" + \
        str(out_seconds).rjust(2, '0')
