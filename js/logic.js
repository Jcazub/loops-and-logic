var myNum = 7;

if (myNum > 5){ //if statements test to see if the expression nested within the parenthesis evanluates to true, if it does it perfroms the code nested within the following {}, if it does not no action is taken by default.
  console.log(myNum + " is greater than 5");
} else if (myNum === 5) { //evaluates if the above statements evaluates to false
  //triple equals is same value and type.

  console.log(myNum + " is currently set to 5")
} else { //else statements are not required though they can be set to perform some default action if all if statements evaluage to false
  console.log(myNum + " is not greater than 5");
}

//once one of the if statements evaluates to true, the if loop is exited and no other statements are evaluated.

if ("2" === 2) { //when testing for equality, always use triple equal.
  console.log('1 is truthy');
}
