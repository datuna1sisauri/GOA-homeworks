window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.scroll-reveal'); 
    let windowBottom = window.innerHeight + window.scrollY; 
    for (let i = 0; i < elements.length; i++) {
        let el = elements[i];
        let elementBottom = el.offsetTop + el.offsetHeight / 2;
        // el.offsetTop არის დაშორება პეიჯის ზედა ნაწილიდან ელემენტის ზედა ნაწილამდე
        // el.offsetHeight / 2 ელემნტის სიმაღლის ნახევარი
        // elementBottom ელემენტის ვერტიკალურად შუა ნაწილი
        if (windowBottom > elementBottom) {
            el.classList.add('visible');
        }
    }
});

let text = "Welcome To GOA";  // ტექსტი რომლის დაწერაც გვინდა
let i = 0;

function type() {
    let h2 = document.getElementById("Welcome"); // იღებს H2 სათაურს
    if (i < text.length) {
        h2.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100); // თითო ასოს წერს 100მილიწამში
    }
}


type();