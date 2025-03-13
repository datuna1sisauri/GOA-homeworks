dict1 = {
    "name": "daviti",
    "surname": "sisauri",
    "age": 14,
    "studing-programming": True,
    "fav-color": "black"
}
sum_num = 0
for key,value in dict1.items():
    if type(value) == int or type(value) == float:
        sum_num += value
print(sum_num)