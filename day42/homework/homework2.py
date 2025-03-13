dict1 = {
    'name': 'David',
    'age': 15,
    'city': 'Paris'
}

age = dict1.get('age', 'Key not found')

print("Age:", age)

city = dict1.get('country', 'Key not found')

print("Country:", city)