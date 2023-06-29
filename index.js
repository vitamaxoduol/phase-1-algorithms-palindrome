function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();

  
  
  // find the length of the string
  let len = word.length;



  for (let i = 0; i < len/2; i++) {
    if (word[i] !== word[len - 1 -i]) {
      return false
    }
  }
  return true
}

/* 
  function isPalindrome takes in word
    convert word to lower case
    
    len = length of word
    
    for i from 0 to len/2
    if character at position i in word is not equal to character at position (len-1-i) in word
    return false
    
    return true
end function
*/

/*
  Explanation of your solution here

It converts the input string word to lowercase to ensure that the function is case-insensitive.


It finds the length of the word string.

It iterates through the first half of the word string. For each character at position i, it checks if it is equal to the character at the mirrored position from the end (len - 1 - i). If it finds any pair of characters that do not match, it immediately returns false, indicating that the string is not a palindrome.

If the loop completes without finding any mismatched characters, the function returns true, indicating that the string is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
