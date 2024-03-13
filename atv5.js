

function reverseString(string) {
  let cont = string.length - 1;
  let arrayString = [];
  for (let i = 0; cont !== -1; i++) {
    arrayString[i] = (string[cont]);
    cont--;
  }
  let stringReverse = '';
  for (let i = 0; i < arrayString.length; i++) {
    stringReverse += arrayString[i];
  }
  return stringReverse
}

console.log(reverseString('lucas'))