correct_Pasword = "hello"

password = input("Enter password: ")
counter = 0
while password != correct_Pasword:
    print("Try again: ")
    password = input("Enter password: ")
    
    counter = counter +1
print(counter)