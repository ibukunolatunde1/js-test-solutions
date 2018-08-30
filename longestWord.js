function longest(sentence){
    let words = sentence.split(' ');
    let longest = 0;
    let longestWord;
    words.forEach((word) => {
      if(longest < word.length) {
        longest = word.length;
        longestWord = word;
      }
    });
    return longestWord;
  }