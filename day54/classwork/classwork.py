numerator = int(input("Enter the numerator:"))
denomerator = int(input("Enter the denominator: "))
result = 0

def calculator():
    try:

        
        if denomerator == 0:
            raise ValueError("u can not devide any number by zero")
        result = numerator/denomerator
        print(f"the result of {numerator} divided by {denomerator} is {result}")
    except ValueError:
        print("there is ValueError")
    
    finally:
        print("Operation Completed")


calculator()