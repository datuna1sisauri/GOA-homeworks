def manual_swapcase(string1):
    x = ""
    
    for i in string1:
        if i.islower():
            x += i.upper()
        else:
            x += i.lower()
            
    print(x)



manual_swapcase("HeLLo WoRLd")