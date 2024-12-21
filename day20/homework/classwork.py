# elif- გამოიყენება if loop-ში და ასრილებს თითქმის იგივე როლლს რასაც if აძლევს პირობას და მის მიხედვით კომპიტერი უბრუნებს პასუხს

num = int(input("Enter your number: "))
num1 = int(input("Enter your number: "))
num2 = int(input("Enter your number: "))


if num > num1 and num > num2:
    print(str(num), "Is bigger")
elif num1 > num and  num1 > num2:
    print(str(num1), "Is bigger")
elif num2 > num and num2 >num1:
    print(str(num2), "Is bigger")
else:
    print("Those three numbers are equal")