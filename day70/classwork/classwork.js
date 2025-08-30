function userloop(){ 
    let num = Number(prompt("Enter first number"))
    let num1 = Number(prompt("Enter second number"));

    for (let i = num; i <= num1; i = i + 1){
        console.log(i)
    }
}
window.onload = userloop;