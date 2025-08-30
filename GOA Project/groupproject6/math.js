document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            name: "q1",
            correctValue: "2k+2",
            points: 5,
            questionText: "ამოცანა 1"
        },
        {
            name: "q2",
            correctValue: "1,15-ჯერ",
            points: 5,
            questionText: "ამოცანა 2"
        },
        {
            name: "q3",
            correctValue: "28სმ",
            points: 5,
            questionText: "ამოცანა 3"
        },
        {
            name: "q4",
            correctValue: "3",
            points: 5,
            questionText: "ამოცანა 4"
        },
        {
            name: "q5",
            correctValue: "3/4",
            points: 5,
            questionText: "ამოცანა 5"
        }
    ];

    // ქმინს დასტურის ღილაკს
    const submitButton = document.createElement("button");
    submitButton.textContent = "შედეგის ნახვა";
    submitButton.style.marginTop = "10px";
    document.body.appendChild(submitButton);

    // დაჭერისას გააქტიუროს ფუნქცია რომელიც აჩვენებს შედეგებს
    submitButton.onclick = function () {
        let totalScore = 0; // ჯამური ქულა
        let feedback = "";
        
        // ამოწმებს შემოხაზული პასუხი სწორია თუ არა
        questions.forEach(q => {
            let checkboxes = document.querySelectorAll(`input[name="${q.name}"]`);
            selected = Array.from(checkboxes).filter(c => c.checked);

            // თუ სწორია ემატება ქულა
            if (selected.length === 1 && selected[0].value === q.correctValue) {
                totalScore += q.points;
                feedback += `${q.questionText}: სწორია! მიიღე ${q.points} ქულა.\n`;
            } else {
                // თუ არასწორია იშვება ეს ხაზი
                feedback += `${q.questionText}: არასწორია. სწორი პასუხია: ${q.correctValue}.\n`;
            }
        });

        feedback += `ჯამური ქულა: ${totalScore}`;
        alert(feedback);
    };
});
