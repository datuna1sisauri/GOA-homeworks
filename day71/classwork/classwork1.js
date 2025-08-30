window.onload = function() {
    let num = Math.round(Math.random() * 100)
    let user_num = parseInt(prompt("Enter any number: "));

    function guess_word() {
        if (user_num > num) {
            console.log("Your number is bigger.");
        } else if (user_num < num) {
            console.log("Your number is smaller.");
        } else {
            console.log("You guessed the number!");
        }
    }

    guess_word();
};