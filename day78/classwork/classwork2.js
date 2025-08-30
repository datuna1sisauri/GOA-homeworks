let div = document.getElementById("div1")

let p = div.getElementsByTagName("p")

for (let i = 0; i<p.length; i++){
    p[i].style.color = "green"
    p[i].style.backgroundColor = "black"
}