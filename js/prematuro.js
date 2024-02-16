"use strict"



let currentQuestion = 1;
let attempts = 0;

function checkAnswer(correct) {
    if (correct) {
        document.getElementById(`question${currentQuestion}`).classList.add('hidden');
        currentQuestion++;
        attempts = 0; // Reiniciar el contador de intentos
        if (currentQuestion <= 7) {
            document.getElementById(`question${currentQuestion}`).classList.remove('hidden');
        } else {
            document.getElementById('githubCat').style.display = 'block';
            document.getElementById('speechBubble').style.display = 'block';
            document.getElementById('responseForm').style.display = 'block';
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
            alert('Has probado suerte demasiadas veces, Te teletransportaré a la primer apregunta .');
        } else {
            alert('Respuesta incorrecta. Por favor, inténtalo de nuevo.');
        }
    }
}

function checkLetter() {
    const letterInput = document.getElementById('letterInput').value.toLowerCase();
    if (letterInput === 'b') {
        alert('¡Respuesta correcta! Desvelando el secreto..., Apunta la primera parte del enlace:\nhttps://github.com ');
        window.location.href = 'segundoReto.html';
        return false;
       
    } else {
        alert('Lo siento FALLASTE. Volviendo a la primera pregunta.');
        currentQuestion = 1; // Reiniciar a la primera pregunta
        document.querySelectorAll('.question').forEach(question => {
            question.classList.add('hidden');
        });
        document.getElementById('question1').classList.remove('hidden');
        document.getElementById('githubCat').style.display = 'none'; // Ocultar el gato de GitHub
        document.getElementById('speechBubble').style.display = 'none'; // Ocultar el bocadillo
        document.getElementById('responseForm').style.display = 'none'; // Ocultar el formulario de respuesta
        return false;
    }
}


