def find_max (list1):
    max_value = list1[0]

    for num in list1:
        if num >max_value:
            max_value = num
    print(max_value)
find_max([1,4,5,16,13,71,36])