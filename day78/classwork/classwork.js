let p = document.getElementsByClassName("p1")
let massive = []

for (let i = 0; i < p.length;i++ ){
    massive.push(p[i].textContent)
}
console.log(massive)