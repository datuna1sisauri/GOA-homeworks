age = int(input("Enter your age: "))
try:
    print(len(age))
except TypeError:
    print(TypeError)