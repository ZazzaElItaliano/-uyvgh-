let clickedWords = [];

function revealWord(wordId) {
    var wordElement = document.getElementById(wordId);
    
   
    if (clickedWords.length === 0 && wordId === 'word1') {
        clickedWords.push(wordId);
    } else if (clickedWords.length === 1 && wordId === 'word2' && clickedWords[0] === 'word1') {
        clickedWords.push(wordId);
    } else if (clickedWords.length === 2 && wordId === 'word3' && clickedWords[1] === 'word2') {
        clickedWords.push(wordId);
    } else if (clickedWords.length === 3 && wordId === 'word4' && clickedWords[2] === 'word3') {
        clickedWords.push(wordId);
    } else {
       
        clickedWords = [];
    }
    

    for (let i = 0; i < clickedWords.length; i++) {
        document.getElementById(clickedWords[i]).classList.add('clicked');
    }
}


