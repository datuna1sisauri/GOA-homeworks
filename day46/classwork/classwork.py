def manual_list (start,end,step,user_num):
    return(i for i in range(start,step,end)if i > user_num)

manual_list(5,50,3,2)