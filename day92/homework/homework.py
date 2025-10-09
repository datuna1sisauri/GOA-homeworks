# The Coupon Code
from datetime import datetime
def check_coupon(entered_code, correct_code, current_date, expiration_date):
    if entered_code != correct_code:
        return False
    current = datetime.strptime(current_date, "%B %d, %Y")
    expiration = datetime.strptime(expiration_date, "%B %d, %Y")
    return current <= expiration


# Are the numbers in order?
def in_asc_order(arr):
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            return False
    return True


# Flatten and sort an array
def flatten_and_sort(array):
    # Flatten the 2D array and sort it
    return sorted([item for sublist in array for item in sublist])



# Factorial
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result



# Maximum Length Difference
def mxdiflg(a1, a2):
    if not a1 or not a2:
        return -1
    max_a1, min_a1 = max(map(len, a1)), min(map(len, a1))
    max_a2, min_a2 = max(map(len, a2)), min(map(len, a2))
    return max(abs(max_a1 - min_a2), abs(max_a2 - min_a1))