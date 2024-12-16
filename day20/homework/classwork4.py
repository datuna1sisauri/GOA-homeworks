num = int(input("Enter your number: "))

is_prime = True
for i in range(2, num):
    if num %i == 0:
        is_prime = False
    
if is_prime:
    print("Is a prime number")
else:
    print("Is not a prime number")