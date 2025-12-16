const p = document.getElementById("txt");
const b = document.getElementById("bt1");

const savedWord = localStorage.getItem("word");
if (savedWord) {
    p.textContent = savedWord;
}

b.addEventListener("click", () => {
    const user = prompt("please enter word");
    if (user) {
        localStorage.setItem("word", user);
        p.textContent = user;
    }
});
