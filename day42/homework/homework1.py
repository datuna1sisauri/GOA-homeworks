dict1 = {
    "name": "daviti",
    "surname": "sisauri",
    "age": 14,
    "studing-programming": True,
    "fav-color": "black"
}
if_key_exists = "name"
if if_key_exists in dict1:
    print(f"{if_key_exists} exist in dict1")
else:
    print(f"{if_key_exists} does not exist in dict1")