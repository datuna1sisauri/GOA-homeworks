input1 = input("Please enter a number: ")

try:
    number = float(input1)
    print(f"You entered the number: {number}")
except ValueError:
    print("Error: That is not a valid number!")