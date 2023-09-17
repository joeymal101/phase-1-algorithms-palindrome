function reverse(word){
  return word.split('').reverse().join('');
}

function isPalindrome(word) {
  // Write your algorithm here
const reversedWord = reverse(word)
return word === reversedWord;
}

/*
  Add your pseudocode here
  that is, if it
reads the same forwards and backwards,

  if the input is reversed
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));


  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("b"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("pig"));



}

module.exports = isPalindrome;
