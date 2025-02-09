# homework 2-4 (UPPER)

# 2
name1 = "daviti"
print(name1.upper())

# 3
input1 = input("Enter your name: ")
print(input1.upper())

# 4
def uppercase(str):
    x =""
    for i in str:
        if i.islower():
            x += i.upper()
        elif i == " ":
            x += " "
    print(x)
    
uppercase("daviti sisauri")

# homework 5-7 (LOWER)

# 5
string1 = "HELLO WORLD"
print(string1.lower())

# 6
user_email = input("Enter your email: ").lower()

# 7
def lowercase(str1):
    y = ""
    for i in str1:
        if i.isupper():
            y += i.lower()
        elif i == " ":
            y += " "
        
    print(y)
lowercase("HELLO WORLD")

# homework 8-10 (Capitalize)

# 8
capitalize = input("Enter Anu Word: ").capitalize()

# 9
list1 =["hello","salami","hola","gamarjoba","bonjug"]
list_range = len(list1)
for i in list1:
    print(i.capitalize())

# 10
def capitalizator(sentence,position):
    sentence = input("Enter a sentence: ")
    position = sentence.find("Python")

    if position != -1:
        print(f"The word 'Python' is found at position: {position}")
    else:
        print("The word 'Python' was not found.")

# homework 11 - 13 (find)

# 11
sentence = "one of the most popular programming languages is python and also it is one of the most easy languages also"
print(sentence.find("python"))

# 12
user_letter = input("enter your letter: ")
provided_string = "Hello i am 15 years old i study in Goa"
print (provided_string.find(user_letter))

# 13
def find_letter(string, char):
    for index in range(len(string)):
        if string[index] == char:
            return index
    return -1


result = find_letter("hello world", "w")
print(result)

# homework 14-15(len)

# 14
user_string = input("Enter your string: ")
print(len(user_string))

# 15
def find_len(list1,list2):
    print(len(list1)) 
    print(len(list2))
find_len((3,31,3,),(32,31,))

# homework 16-18(count)

#16
paragraph = "hello my favourite sport is the football in the football the goal is to score"
print(paragraph.count("the"))

# 17
user_letter1 =input("Enter any letter: ")
my_string = "Hello my friends"
print(my_string.count(user_letter1))

#18
def counter_of_letters(word1):
    text = "hello my friend my name is daviti i am 15 years old and i am learning programming"
    counter1 = 0

# homework 19-20(index)

# 19
user_string1 = input("Enter any string: ")
user_string1.index("hello")

# 20
user_str_tofind = input("Enter any letter: ")
user_str = input("Enter any string: ")
def find_index(user_str_tofind1,user_str1):
    x = user_str1.index(user_str_tofind1)
    print(x)
find_index(user_str_tofind,user_str)