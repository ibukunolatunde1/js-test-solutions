function isIsogram(word){
    let testWord = word.toLowerCase();
    let letterCount = {};
    let isAnIsogram = true;
    for( let i = 0; i < testWord.length; i++ ){
        let letter = testWord.charAt(i);
        if(letterCount[letter]){
            letterCount[letter] = 1 + letterCount[letter];
        } else{
            letterCount[letter] = 1;
        }
        if(letterCount[letter] > 1){
            isAnIsogram = false;
            return isAnIsogram;
        }
    }

    return isAnIsogram;
}

console.log(isIsogram('Elizabth'));
console.log(isIsogram('Benin'));