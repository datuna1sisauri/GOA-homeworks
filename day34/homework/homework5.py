list = [4,1,2,3,4,5,1,5,2,12,3,1]
def odd_or_even(list1):
    for i in list1:
        if i % 2 == 0:
            print(i,"is even")
        else:
            print(i,"is odd")
odd_or_even(list)