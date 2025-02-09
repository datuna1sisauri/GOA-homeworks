def pop_function(main_list,indexes_list):
    for i in indexes_list:
        main_list.pop(i)
    
    print(main_list)

pop_function([2,3,4,5,6,7,1,2,],[2,1,3])