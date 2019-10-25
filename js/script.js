window.onload = function(){
    var words = ['Photographer.', 'Graphic Designer.'],
    currentStep = 0,
    textSel = document.querySelector('#role'),
    oldWord = '';
    
    setTimeout(changeWords, 1000);
    function changeWords(){
        oldWords = textSel.innerHTML;
        if (oldWords.length < 1){
            if (currentStep !== words.length - 1){
                currentStep++;
            } else {
                currentStep = 0;
            }
            addNextWords();
        } else {
            setTimeout(deleteWords, 800);
        }
    }

    function deleteWords(){
        var wordsLength = oldWords.length,
        currentWords = textSel.innerHTML,
        currentLength = currentWords.length;
        if (currentLength < 1){
            changeWords();
            return;
        }

        textSel.innerHTML = currentWords.substring(0, currentLength - 1);
        setTimeout(deleteWords, 200);
    }
    function addNextWords() {
        var currentWords = textSel.innerHTML,
            currentLength = currentWords.length,
            nextWords = words[currentStep],
            nextWordsLength = nextWords.length;
          
        
        if (currentLength === nextWordsLength) {
          changeWords();
          return;
        }
        
        // add a charachter
        textSel.innerHTML = nextWords.substring(0, currentLength + 1);
          
        setTimeout(addNextWords, 200);
        
        
      }
};


document.getElementById('nextPage').onclick = function(){
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');

    page1.classList.add('hidePage');
    page1.classList.remove('showPage');
    page2.style.display = "flex";
    page2.classList.add('showPage');
    page2.classList.remove('hidePage');
    page1.classList.display = "none";
};

