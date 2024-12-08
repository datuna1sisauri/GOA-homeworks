correct_password = "Goa best"

user_password = input("Enter your password: ")

counter = 0

while correct_password != user_password:
    print("try again")
    user_password = input("Enter your password: ")
    counter += 1

print("your total attempts are" , str(counter))


