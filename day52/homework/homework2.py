def correct(string):
    nums = {'5': 'S', '0': 'O', '1': 'I'}
    return ''.join(nums.get(c, c) for c in string)