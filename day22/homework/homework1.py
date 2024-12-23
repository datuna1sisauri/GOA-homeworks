list1 = [1, 6, 6.1,True, "Hello,World", False, 6.0, 7, 1, 9]

num = int(input("Enter your number: "))
num1 = int(input("Enter your number: "))
if num > num1:
    list2 = (list1[-num:-num1])
    print(list2)
elif num1 > num:
    list2 = (list1[-num1:-num])
    print(list2)
elif num == num1:
    list2 = []
    print(list2)