function addNewEllement(){
    let div = document.getElementById("div1")

    let button = document.createElement("button")
    button.textContent = "Click here"

    div.appendChild(button)
}

addNewEllement()