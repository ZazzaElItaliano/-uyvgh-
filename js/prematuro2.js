function checkAnswer(correct) {
    if (correct) {
        document.getElementById(`question${currentQuestion}`).classList.add('hidden');
        currentQuestion++;
        attempts = 0; // Reiniciar el contador de intentos
        if (currentQuestion <= 7) {
            document.getElementById(`question${currentQuestion}`).classList.remove('hidden');
        } else {
            document.getElementById('dockerWhale').style.display = 'block';
            document.getElementById('speechBubble1').style.display = 'block';
            document.getElementById('responseForm1').style.display = 'block';
        }
    } else {
        attempts++;
        if (attempts === 2) {
            currentQuestion = 1; // Volver a la primera pregunta
            document.querySelectorAll('.question').forEach(question => {
                question.classList.add('hidden');
            });
            document.getElementById('question1').classList.remove('hidden');
            attempts = 0; // Reiniciar el contador de intentos
            alert('Has agotado tus intentos en esta pregunta. Volviendo a la primera pregunta.');
            // Ocultar la imagen de la ballena y el reto
            document.getElementById('dockerWhale').style.display = 'none';
            document.getElementById('speechBubble1').style.display = 'none';
            document.getElementById('responseForm1').style.display = 'none';
        } else {
            alert('Respuesta incorrecta. Por favor, inténtalo de nuevo.');
        }
    }
}

function checkWord() {
    const wordInput = document.getElementById('wordInput').value.toLowerCase();
    if (wordInput === 'socorro') {
        alert('¡Respuesta correcta! Desvelando la siguiente pista\n/almarlin');
        // window.location.href = '/tercerReto.html';
        return true;
    } else {
        alert('Palabra incorrecta. Volviendo a la primera pregunta.');
        currentQuestion = 1;
        document.querySelectorAll('.question').forEach(question => {
            question.classList.add('hidden');
        });
        document.getElementById('question1').classList.remove('hidden');
        // Ocultar la imagen de la ballena y el reto
        document.getElementById('dockerWhale').style.display = 'none';
        document.getElementById('speechBubble1').style.display = 'none';
        document.getElementById('responseForm1').style.display = 'none';
        return false;
    }
}
