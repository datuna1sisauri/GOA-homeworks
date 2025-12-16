console.log("This is the first line of code in app.js.");


function usingSTO() {
    console.log("Hello World!")
}

setTimeout(usingSTO,2500)


console.log("This is the last line of code in app.js.");



const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];


function handleSuccess(resolveVal) {
    console.log(resolveVal)
}

function handleFailure(failureVal) {
    console.log(failureVal)
}

checkInventory(order).then(handleSuccess, handleFailure)



