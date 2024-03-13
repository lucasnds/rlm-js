
function isFib(num){
let a = 0;
let b = 1;
let c = [a,b]

for(let i = 2; i < 10 ; i++){
  c[i] = c[i - 1] + c[i - 2];
}
for(let i = 0; i < c.length ; i++){
  if(c[i] === num){
    return console.log('é fibonacci')
  }
}
return console.log('nn é fibonacci')
}

isFib(4)