list = ["hello",4,1,True,"BYE BYE",False]
item = "GOA"
def function(list1,item1):
    list_length = len(list1)

    list1.insert(list_length,item1)
    print(list1)

function(list,item)