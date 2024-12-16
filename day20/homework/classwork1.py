score = int(input("Enter number from 1 to 100: "))

if score in range(90,101):
    print("Your grade is A")
elif score in range(80, 90):
    print("Your grade is B")
elif score in range(70, 80):
    print("Your grade is C")
elif score in range(60, 70):
    print("Your grade is D")
else:
    print("Your grade is F")