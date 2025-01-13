def find_factorial(num):
    result = 1

    for i in range(2,num+1):
        result *= i

    print(result)



find_factorial(71)