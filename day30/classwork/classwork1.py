def manual_find(main_string, str_to_find):
    x = len(main_string)
    y= len(str_to_find)
    
    for i in range(x - y + 1):
        if main_string[i:i + y] == str_to_find:
            return i  
    return -1  


print(manual_find("Daviti", "v"))  

print(manual_find("GOA THE BEST","L"))
