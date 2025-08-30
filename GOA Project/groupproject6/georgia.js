document.addEventListener("DOMContentLoaded", function () {
    // კითხვების მასივი
    const questions = [
        {
            name: "q1",
            correctValue: "გ",
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
            correctValue: "ბ",
            points: 5,
            questionText: "ამოცანა 3"
        },
        {
            name: "q4",
            correctValue: "ბ",
            points: 5,
            questionText: "ამოცანა 4"
        },
        {
            name: "q5",
            correctValue: "ა",
            points: 5,
            questionText: "ამოცანა 5"
        }
    ];

    // ქმნის პასუხების ჩვენების ღილაკს
    const submitButton = document.createElement("button");
    submitButton.textContent = "შედეგის ნახვა";
    submitButton.style.marginTop = "10px";
    document.body.appendChild(submitButton);

    // ღიალკზე დაჭერისას ამოწმებს პასუხებს
    submitButton.onclick = function () {
        let totalScore = 0; //საბოლოო ქულა
        let feedback = "";  //შედეგის ტექსტი
        // ყოველ ამოცანას ამოწმებს სწორია თუ არა
        questions.forEach(q => {
            let checkboxes = document.querySelectorAll(`input[name="${q.name}"]`);
            selected = Array.from(checkboxes).filter(c => c.checked); // მონიშნული პასუხის ძებნა

            //თუ პასუხი სწორია
            if (selected.length === 1 && selected[0].value === q.correctValue) {
                totalScore += q.points;
                feedback += `${q.questionText}: სწორია! მიიღე ${q.points} ქულა.\n`;
            } else {
                // არასწორი პასუხის შემთხვევაში სწორი პასუხის ჩვენება
                feedback += `${q.questionText}: არასწორია. სწორი პასუხია: ${q.correctValue}.\n`;
            }
        });
        // ჯამური ქულის დამატება
        feedback += `ჯამური ქულა: ${totalScore}`;
        alert(feedback);
    };
});
