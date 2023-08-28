

let sentence ='search about word';
console.log(sentence)

///////////////////////////////////////examble1//////////////////////////////////
console.log('-------------------frist examble ------------------------------')
let getWord = sentence.includes('word')? 'word':'not find'
// let getIndx = getWord.indexOf
 console.log(getWord); 
 console.log(`start index of word ${sentence.indexOf('word')}`); 
 //word and start index 
  ////////examble2//////////////////////////////////
console.log('---------------examble 2 --------------')

let getnumber_word= sentence.split(' ');

console.log(getnumber_word.length)


///////////////////////////////////////examble3//////////////////////////////////
console.log(' --------------examble 3-----------------')

let a= sentence.split(' ');
let x =a.reverse();

//covert array to string
console.log(x.join(' '))
///////////////////////////////////////examble4//////////////////////////////////
console.log('------------ examble 4-------------')

function myfun(a){
  for(let i=0 ;i<a.length ;i++){
    if(a[i] === a[i - 1]){
      console.log(`Repeater character is ${a[i]}`);  
    }
  }
  return -1; 
}
(myfun('aabbaaaaffm'))
// console.log


