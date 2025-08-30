# Printer Errors
def printer_error(s):
    valid = "abcdefghijklm"
    res = 0

    for i in s:
        if i not in valid: res += 1

    return f"{res}/{len(s)}"