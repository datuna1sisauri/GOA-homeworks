dict1 = {
    "name": "daviti",
    "surname": "sisauri",
    "age": 14,
    "studing-programming": True,
    "fav-color": "black"
}

print("Keys",dict1.keys())
print("Values",dict1.values())
print("Items",dict1.items())


for key,values in dict1.items():
    print(f"{key}:{values}")