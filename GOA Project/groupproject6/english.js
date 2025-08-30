document.addEventListener("DOMContentLoaded", function () {
    // კითხვების მასივი, სადაც მითითებულია თითოეული ამოცანის სახელი, სწორი პასუხი, ქულა და ტექსტი
    const questions = [
        {
            name: "q1",
            correctValue: "D",
            points: 5,
            questionText: "ამოცანა 1"
        },
        {
            name: "q2",
            correctValue: "A",
            points: 5,
            questionText: "ამოცანა 2"
        },
        {
            name: "q3",
            correctValue: "C",
            points: 5,
            questionText: "ამოცანა 3"
        },
        {
            name: "q4",
            correctValue: "B",
            points: 5,
            questionText: "ამოცანა 4"
        },
        {
            name: "q5",
            correctValue: "A",
            points: 5,
            questionText: "ამოცანა 5"
        }
    ];

    // ქმნის ღილაკს ტექსტით "შედეგის ნახვა"
    const submitButton = document.createElement("button");
    submitButton.textContent = "შედეგის ნახვა";
    submitButton.style.marginTop = "10px";
    document.body.appendChild(submitButton); // ღილაკის დამატება გვერდზე

    // ღილაკზე დაჭერისას ქულების შემოწმება
    submitButton.onclick = function () {
        let totalScore = 0; // ჯამური ქულა
        let feedback = "";  // შედეგის ტექსტი

        // ყოველი ამოცანისთვის ამოწმებს სწორად მონიშნა თუ არა მომხმარებელმა
        questions.forEach(q => {
            let checkboxes = document.querySelectorAll(`input[name="${q.name}"]`);
            selected = Array.from(checkboxes).filter(c => c.checked); // მონიშნული პასუხების მოძებნა

            // თუ ერთი სწირო პასუხია მონიშნული
            if (selected.length === 1 && selected[0].value === q.correctValue) {
                totalScore += q.points; // ქულის დამატება
                feedback += `${q.questionText}: სწორია! მიიღე ${q.points} ქულა.\n`;
            } else {
                // არასწორი პასუხის შემთხვევაში სწორი პასუხის ჩვენება
                feedback += `${q.questionText}: არასწორია. სწორი პასუხია: ${q.correctValue}.\n`;
            }
        });

        // ჯამური ქულის დამატება ტექსტში
        feedback += `ჯამური ქულა: ${totalScore}`;
        alert(feedback); // შედეგის ჩვენება alert-ით
    };
});
