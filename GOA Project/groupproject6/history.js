document.addEventListener("DOMContentLoaded", function () {
    // კითვების და პასუხების მასივი
    const questions = [
        {
            name: "q1",
            correctValue: "ბ",
            points: 5,
            questionText: "ამოცანა 1"
        },
        {
            name: "q2",
            correctValue: "ბ",
            points: 5,
            questionText: "ამოცანა 2"
        },
        {
            name: "q3",
            correctValue: "დ",
            points: 5,
            questionText: "ამოცანა 3"
        },
        {
            name: "q4",
            correctValue: "ა",
            points: 5,
            questionText: "ამოცანა 4"
        },
        {
            name: "q5",
            correctValue: "ბ",
            points: 5,
            questionText: "ამოცანა 5"
        }
    ];

    // ღილაკის შექმნა
    const submitButton = document.createElement("button");
    submitButton.textContent = "შედეგის ნახვა";
    submitButton.style.marginTop = "10px";
    document.body.appendChild(submitButton);

    // დაჭერისას გააქტიუროს ფუნქცია
    submitButton.onclick = function () {
        let totalScore = 0; // ჯამური ქულა
        let feedback = "";

        // ამოწმებს პასუხები სწორია თუ არა
        questions.forEach(q => {
            let checkboxes = document.querySelectorAll(`input[name="${q.name}"]`);
            selected = Array.from(checkboxes).filter(c => c.checked);

            // თუ სწორია იშვება ეს ხაზი
            if (selected.length === 1 && selected[0].value === q.correctValue) {
                totalScore += q.points;
                feedback += `${q.questionText}: სწორია! მიიღე ${q.points} ქულა.\n`;
            } else {
                // თუ კი პასუხი არასწორია იშვება ეს კოდი
                feedback += `${q.questionText}: არასწორია. სწორი პასუხია: ${q.correctValue}.\n`;
            }
        });

        feedback += `ჯამური ქულა: ${totalScore}`;
        alert(feedback);
        
    };
});
