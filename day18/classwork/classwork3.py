num = int(input("Enter your number: "))
num1 = int(input("Enter your number: "))

if num > num1:
    range1 = range(num1 , num + 1)
    sum1 = 0
    for i in range1:
        if i%2 == 0:
            print(i)
            sum1 += i
    
    print("Sum of all even numbers are", str(sum1))
else:
    range2 =range(num , num1 + 1)
    sum2 = 0
    for i in range2:
        if i%2 != 1:
            print(i)
            sum2 += i
    
    print("Sum of all odd numbers are", str(sum2))