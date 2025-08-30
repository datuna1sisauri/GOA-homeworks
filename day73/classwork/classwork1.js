function change1(){
    let div = document.getElementById("div1")
    let p = document.getElementById("p1")
    let i =document.createElement("i")
    let button = document.getElementById("bt1")

    i.textContent="Goa the best"

    div.removeChild(button)
    div.replaceChild(i,p)
}
change1()