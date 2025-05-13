def replace_exclamation(s):
    vowels = "aeiouAEIOU"
    return ''.join('!' if char in vowels else char for char in s)
