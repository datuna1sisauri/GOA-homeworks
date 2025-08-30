# Find the stray number
def stray(arr):
    for x in arr:
        if arr.count(x) == 1:
            return x
        
# Sort Numbers
def solution(nums):
    return sorted(nums) if nums else []


# Make a function that does arithmetic!
def arithmetic(a, b, operator):
    return {
        'add': a + b,
        'subtract': a - b,
        'multiply': a * b,
        'divide': a / b,
    }[operator]
    

# Breaking chocolate problem
def breakChocolate(n, m):
    return max(n*m-1,0)

# Anagram Detection
def is_anagram(test, original):
    return sorted(original.lower()) == sorted(test.lower()) 