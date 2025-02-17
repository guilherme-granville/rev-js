
        function checkAnswer(selected) {
            const correctAnswer = "B";

            let resultMessage = "";
            if (selected === correctAnswer) {
                resultMessage = "Parabéns, você acertou! A resposta correta é 'O DELEGADO'.";
                document.getElementById(selected).style.backgroundColor = "green";
            } else {
                resultMessage = "Resposta errada, tente novamente!";
                document.getElementById(selected).style.backgroundColor = "red";
            }
            
            document.getElementById("result").innerText = resultMessage;

            disableOptions();
        }

        function disableOptions() {
            const options = document.querySelectorAll(".option");
            options.forEach(option => {
                option.style.pointerEvents = "none";
            });
        }

        document.getElementById("a").addEventListener("click", () => checkAnswer("A"));
        document.getElementById("b").addEventListener("click", () => checkAnswer("B"));
        document.getElementById("c").addEventListener("click", () => checkAnswer("C"));
        document.getElementById("d").addEventListener("click", () => checkAnswer("D"));