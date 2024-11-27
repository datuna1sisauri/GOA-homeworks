correct_password = 1111

password = int(input("Enter your password: "))

while password != correct_password:
    print("Incorrect password try again ")
    
    password = int(input("Enter your password: "))
    
print("Welcome Back :)")