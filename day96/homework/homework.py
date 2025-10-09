# Form The Minimum
def min_value(digits):
    unique_digits = list(set(digits))
    unique_digits.sort()
    return int(''.join(map(str, unique_digits)))

# Triangular Treasure
def triangular(n):
    if n <= 0:
        return 0
    return n * (n + 1) // 2

# Sum of Minimums
def sum_of_minimums(numbers):
    return sum(min(row) for row in numbers)

# Fizz Buzz
def fizzbuzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(i)
    return result