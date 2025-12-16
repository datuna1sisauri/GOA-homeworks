class Student {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    info() {
        return `${this.name}, ${this.age} years old`
    }
    }

    class StudentManager {
    constructor() {
        this.students = []
    }

    addStudent(name, age) {
        const student = new Student(name, age)
        this.students.push(student)
    }

    listStudents() {
        return this.students.map((s, i) => `${i + 1}) ${s.info()}`).join("\n")
    }

    removeStudent(index) {
        if (index >= 0 && index < this.students.length) {
        this.students.splice(index, 1)
        }
    }
}

const manager = new StudentManager()
manager.addStudent("Nick", 20)
manager.addStudent("Anna", 18)
manager.addStudent("George", 22)
console.log(manager.listStudents())
manager.removeStudent(1)
console.log("After removing:")
console.log(manager.listStudents())

class Teacher {
    constructor(name, subject) {
        this.name = name
        this.subject = subject
    }

    introduce() {
        console.log(`Hello, I am ${this.name} and I teach ${this.subject}.`)
    }
}

const teacher = new Teacher("Mr. John", "History")
teacher.introduce()

class Phone {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }

    ring() {
        console.log(`The ${this.brand} ${this.model} is ringing!`)
    }
}

const phone = new Phone("Samsung", "Galaxy S21")
phone.ring()

class Movie {
    constructor(title, year) {
        this.title = title
        this.year = year
    }

    play() {
        console.log(`Now playing: ${this.title} (${this.year})`)
    }
}

const movie = new Movie("The Matrix", 1999)
movie.play()

class Cat {
    constructor(name, color) {
        this.name = name
        this.color = color
    }

    meow() {
        console.log(`${this.name} the ${this.color} cat says Meow!`)
    }
}

const cat = new Cat("Luna", "gray")
cat.meow()

class BankCard {
    constructor(cardNumber, balance) {
        this.cardNumber = cardNumber
        this.balance = balance
    }

    withdraw(amount) {
        if (amount <= this.balance) {
        this.balance -= amount
        console.log(`New balance: ${this.balance}`)
        } else {
        console.log("Insufficient funds")
        }
    }
}

const card = new BankCard("1111 2222 3333 4444", 300)
card.withdraw(50)
card.withdraw(300)