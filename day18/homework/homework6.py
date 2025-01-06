num = int(input("Enter number: "))
num1 = int(input("Enter number: "))

operator = input("Enter one of this operations: +, -, *, /, **, %,: ")

if operator == "+":
    print(num, "+", num1, "=", num+num1)
elif operator == "-":
    print(num, "-", num1, "=", num-num1)
elif operator == "*":
    print(num, "*", num1, "=", num*num1)
elif operator == "/":
    if num1 == 0:
        print("0-ზე გაყოფა არ შეიძლება")
    else:
        print(num, "/", num1, "=", num/num1)
elif operator == "**":
    print(num, "**", num1, "=", num**num1)
elif operator == "%":
    print(num, "%", num1, "=", num%num1)
else:
    print("wrong operator")
