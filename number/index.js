let arr =[1,2,3,4,8,7,2]
///////////////////////////////////////examble1 wthiout funcation////////////////////////
let x=0;
for(i=0;i<=arr.length;i++){
    x+=i 
}
console.log(x)
///////////////////////////////////////examble1 with funcation////////////////////////

let getSum = arr.reduce((total,value)=>{
   return total +=value ;
}
);
console.log('1111111111111111111111111111111111')
console.log(getSum)
///////////////////////////examble2////////////////////////////////////////////////
// console.log('22222222222222222222222222222222222')

function largest(arr){ 
    let num = 0;
    for (let i = 0; i < arr. length; i++){
         if (arr[i] >arr[i+1]){ 
            num = arr[i];
            return num; 
        
        } 
    }
 } 
console.log(largest(arr))
/////////////////////////examble3//////////////////////////////////////////
// console.log('333333333333333333333333333333333333333333')
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min }
console.log(getRandomArbitrary(1,10))


