
        function checkAnswer(selected) {
            const correctAnswer = "B";

            let resultMessage = "";
            if (selected === correctAnswer) {
                resultMessage = "Parabéns, você acertou! A resposta correta é 'O DELEGADO'.";
                document.getElementById(selected).style.backgroundColor = "green"; // Cor verde para resposta correta
            } else {
                resultMessage = "Resposta errada, tente novamente!";
                document.getElementById(selected).style.backgroundColor = "red"; // Cor vermelha para resposta errada
            }
            
            // Exibe a mensagem de resultado
            document.getElementById("result").innerText = resultMessage;

            // Desabilita todas as opções após uma tentativa
            disableOptions();
        }

        // Função para desabilitar todas as opções
        function disableOptions() {
            const options = document.querySelectorAll(".option");
            options.forEach(option => {
                option.style.pointerEvents = "none"; // Desabilita clique
            });
        }

        // Adicionando evento de clique nas opções
        document.getElementById("a").addEventListener("click", () => checkAnswer("A"));
        document.getElementById("b").addEventListener("click", () => checkAnswer("B"));
        document.getElementById("c").addEventListener("click", () => checkAnswer("C"));
        document.getElementById("d").addEventListener("click", () => checkAnswer("D"));