let div = document.getElementById("div1")

for (let i = 1; i <=5; i++){
    let p = document.createElement("p")

    p.textContent = "Hello World"

    div.appendChild(p)
}