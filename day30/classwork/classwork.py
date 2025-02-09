name = input("Enter your name: ")

choice = input("chose u or l: ")

if choice == "u":
    print(name.upper())
elif choice == "l":
    print(name.lower())
else:
    print("wrong information")