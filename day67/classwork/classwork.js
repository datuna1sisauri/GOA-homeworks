let obj = {
    name: "david",
    surname: "sisauri",
    academy: "GOA",
    city: "Tbilisi",
    role: "student",
    favColor: "Black",

    logNameUsername(){
        console.log(this.name)
        console.log(this.surname)
    },

    logFavColor(){
        console.log(this.favColor)
    }

}


console.log(obj)
console.log(obj.city)
obj.logNameUsername()

obj.city = "Batumi"
console.log(obj.city)