function checkForPalindrome(str) {
  var tester = str.split("");
  tester = tester.reverse(); //all methods must have a parenthesis in order to perform the method. Properties are set to values, so they do not need parenthesis.
  tester = tester.join("");
  if (tester === str) {
    console.log('This is a palindrome!')
    return true;
  } else {
    console.log('This is NOT a palindrome')
    return false;
  }

}

//checkForPalindrome('racecar');
