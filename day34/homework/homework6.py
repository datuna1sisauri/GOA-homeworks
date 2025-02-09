list = [4,1,2,5,1,2,7,54,32,12,60]
def find_maximum(list1):
    max_num = list1[0]

    for i in list1:
        if i > max_num:
            max_num = i
    
    print(max_num)

find_maximum(list)