def sum_of_nums(start,end):
    sum = 0
    for i in range(start,end):
        if i %3 == 0:
            sum += i
    print(sum)
sum_of_nums(0,11)
