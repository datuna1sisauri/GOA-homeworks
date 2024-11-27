real_nickname = ("Daviti_sisauri")

real_password = int(1111)

user_nickname = input("Enter your nickname: ")

user_password = int(input("Enter your password: "))


while (user_nickname and user_password) != (real_nickname and real_password):
    print("Icorrect try again")
    user_nickname = input("Enter your nickname: ")
    user_password = int(input("Enter your password: "))

print("Wellcome Back :)")