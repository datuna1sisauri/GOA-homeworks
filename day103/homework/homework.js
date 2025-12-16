function updateClock() {
    const now = new Date()
    const time = now.toLocaleTimeString()
    document.getElementById("clock").textContent = time
}
setInterval(updateClock, 1000)
updateClock()

function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1
    document.getElementById("diceResult").textContent = "გამოვიდა: " + dice
}

const fruits = ["ვაშლი", "მსხალი", "ბანანი", "ატამი"]
function pickFruit() {
  const index = Math.floor(Math.random() * fruits.length)
    document.getElementById("fruitResult").textContent = "შენ აირჩიე: " + fruits[index]
}

function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let password = ""
    for (let i = 0; i < 8; i++) {
        password += chars[Math.floor(Math.random() * chars.length)]
    }
    document.getElementById("passwordResult").textContent = "პაროლი: " + password
}

const months = ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"]
const currentMonth = new Date().getMonth()
document.getElementById("monthText").textContent = "მიმდინარე თვეა: " + months[currentMonth]

const weekdays = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
const today = new Date().getDay()
document.getElementById("weekdayText").textContent = "დღეს არის: " + weekdays[today]

function countdown() {
    const input = new Date(document.getElementById("bday").value)
    const now = new Date()
    input.setFullYear(now.getFullYear())
    if (input < now) input.setFullYear(now.getFullYear() + 1)
    const diff = input - now
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    document.getElementById("bdayResult").textContent = "დარჩენილია " + days + " დღე"
}

let startTime
function startTimer() {
    startTime = Date.now()
    setTimeout(() => {
        const seconds = Math.floor((Date.now() - startTime) / 1000)
        document.getElementById("timerResult").textContent = "გავიდა " + seconds + " წამი"
    }, 3000)
}

function generateColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const color = `rgb(${r}, ${g}, ${b})`
    document.getElementById("colorResult").textContent = color
    document.body.style.backgroundColor = color
}