const object1 = {
    name: "Alice",
    age: 25,
    country: "USA",
    profession: "Engineer",
    active: true
}

const keys = Object.keys(object1)
console.log(keys)

const keyCount = keys.length
console.log(keyCount)

function getUppercaseKeys(obj) {
    return Object.keys(obj).map(key => key.toUpperCase())
}
console.log(getUppercaseKeys(object1))

const keyExists = Object.keys(object1).includes("age")
console.log(keyExists)

const nestedObject = {
    a: 1,
    b: 2,
    c: {
        d: 4,
        e: 5
    },
    f: "hello",
    g: {
        h: 10
    }
}
const topLevelKeys = Object.keys(nestedObject)
console.log(topLevelKeys)



const object2 = {
    name: "Bob",
    score: 90,
    passed: true,
    age: 21,
    city: "London"
}

const values = Object.values(object2)
console.log(values)

const valueCount = values.length
console.log(valueCount)

function getNumericValues(obj) {
return Object.values(obj).filter(value => typeof value === "number")
}
console.log(getNumericValues(object2))

const sum = Object.values(object2).reduce((total, value) => {
    return typeof value === "number" ? total + value : total
}, 0)
console.log(sum)

const valueExists = Object.values(object2).includes("London")
console.log(valueExists)


const object3 = {
    product: "Book",
    price: 15,
    inStock: true,
    rating: 4.5,
    seller: "StoreX"
}

const entries = Object.entries(object3)
console.log(entries)

function printKeyValues(obj) {
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key}: ${value}`)
    })
}
printKeyValues(object3)

const keyValueStrings = Object.entries(object3).map(([key, value]) => `${key}=${value}`)
console.log(keyValueStrings)

function filterValuesGreaterThan10(obj) {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => typeof value === "number" && value > 10)
    )
    }
    console.log(filterValuesGreaterThan10(object3))

    function swapKeysAndValues(obj) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [String(value), key])
    )
}
console.log(swapKeysAndValues(object3))


const obj = {
    name: "Charlie",
    age: 30,
    city: "Berlin"
}

const hasAge = obj.hasOwnProperty("age")
console.log(hasAge)

const hasSalary = obj.hasOwnProperty("salary")
console.log(hasSalary)

const testObj = {}
const hasToString = testObj.hasOwnProperty("toString")
console.log(hasToString)

obj.country = "Germany"
const hasCountry = Object.hasOwn(obj, "country")
console.log(hasCountry)

delete obj.city
const cityExists = Object.hasOwn(obj, "city")
console.log(cityExists)