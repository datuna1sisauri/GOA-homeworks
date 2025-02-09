def only_positive(list):
    new_list = []

    for i in list:
        if i > 0:
            new_list.append(i)
    print(new_list)

only_positive([321,321,-3,-41,21,-42,41])