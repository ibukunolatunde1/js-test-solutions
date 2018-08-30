let removeDuplicates = word => {
    let myWord = word.trim();
    myWord = Array.from(myWord);
    let duplicates = 0;
    let hasDuplicate = {};
    for( let i = myWord.length - 1; i >= 0; i--){
      if( myWord[i].charCodeAt(0) < 97 || myWord[i].charCodeAt(0) > 122 ){
        myWord.splice(i, 1);
      } 
      else if( hasDuplicate[myWord[i]] == true ){
        myWord.splice(i, 1);
        duplicates++;
      }
      else{
        hasDuplicate[myWord[i]] = true;
      }
    }
    let newWord = myWord.sort().join('');
    return {
      uniques: newWord,
      duplicates
    }
  
  }

console.log(removeDuplicates('-aabb-ccdd'));