function findLongestWord(string) {
    // Change code below this line
      const ArrayWord = string.split(" ");
      let tmpLongestWord = ArrayWord[0];
      const tmpArrayLitteral = ArrayWord[0].split("");
      let tmpLongestLength = tmpArrayLitteral.length;  
    for (let i = 1; i < ArrayWord.length; i++) {
       //tmpArrayLitteral = ArrayWord[i].split("");
        
       if (ArrayWord[i].length > tmpLongestLength) {
           tmpLongestLength = ArrayWord[i].length;
           tmpLongestWord = ArrayWord[i];
       } 
    }
  return tmpLongestWord;
    // Change code above this line
  }

  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));