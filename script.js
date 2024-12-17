function tryWord(word, base)
{
    let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    let arrayBase = base.split('');
    let arrayWord = word.split('');
	for (let i = 0; i < arrayBase.length; i++) {
  	    if (arrayBase[i] === arrayWord[i]) {
  	        wellPlaced.push(arrayWord[i]);
        } else {
            missplaced.push(arrayWord[i]);
        }
    }
    for (const char of arrayWord) {
 	    if (arrayBase.includes(char) === false) {
   	        notInWord.push(char);
        }
    }
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord };
}

function guess()
{
    let base = 'dictionnaire';
	let word = document.getElementById("word").value;
	let result = tryWord(word, base);
    document.getElementById("word").value = '';
 	document.getElementById("try").innerText = word;
    document.getElementById("well").innerText = 'Bien placé: ' + result.wellPlaced.slice(0, result.wellPlaced.length > word.length ? word.length : result.wellPlaced.length).join(', ');
    document.getElementById("miss").innerText = 'Mal placé: ' + result.missplaced.slice(0, result.missplaced.length > word.length ? word.length : result.missplaced.length).join(', ');
    document.getElementById("not").innerText = 'Pas dans le mot: ' + result.notInWord.slice(0, result.notInWord.length > word.length ? word.length : result.notInWord.length).join(', ');
    if (result.wellPlaced.length === base.length) {
	    document.getElementById("win").innerText = 'Vous avez gagné';
    }
}
