var myArr = [0,1,2,3,4,5,6,7,8];
var newArr = [];

for (i = 0; i < myArr.length; i++) {
  newArr[i] = myArr[(myArr.length-i)-1];
  //console.log(myArr[i]);
  //console.log(newArr[i]);
}

for (i = 0; i < myArr.length; i++) {
  myArr[i] = newArr[i];
  console.log(myArr[i]);
}
