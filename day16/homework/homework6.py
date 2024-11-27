num = int(input("Enter your number: "))

factorial = 1

result = 1

while factorial < (num + 1):
    result = result * factorial
    
    factorial = factorial + 1

print(result)