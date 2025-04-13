def apply_to_list(func,values):
    return [func(value) for value in values]

def square(x):
    return x**2

values = [4,2,1,3,9]
result = apply_to_list(square,values)
print(result)
