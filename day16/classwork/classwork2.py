my_num = int(7)


guess = int(input("Enter number from 1 to 10: "))


counter = 0
while guess != my_num:
    print("Try again: ")
    
    guess = int(input("Enter number from 1 to 10: "))
    
    counter = counter + 1

print("Congrats u guessed the number :)")
print("Total tryis is:", int(counter))