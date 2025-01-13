def manual_index(string1,string):
    for i in range(len(string1)):
        if string1[i] == string:
            print(i)


manual_index("HELLO WORLD", "W")