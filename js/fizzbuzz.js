//Print every number from 0 to 100, including 0 to 100, but if the number is evenly divisible by 3 log 'fizz' instead, if the number is evenly divisible by 5 log 'buzz' instead, if the number is evenly divisible by 3 and 5 log 'fizzbuzz', if not evenly divisible by either 3 or 5 log the number.

for (i = 0; i <= 100; i++){
  if (i = 0){
    console.log(i);
  } else if (i%3===0 && !(i%5===0)){ //checks to see if i is divisible by 3
    console.log('fizz');
  } else if (i%5===0 && !(i%3===0)){ //checks to see if i is divisible by 5
    console.log('buzz');
  } else if ((i%3===0) && (i%5===0)) { //checks
    console.log('fizzbuzz');
  } else {
    console.log(i);
  }
}
