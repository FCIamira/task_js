/////////////////////////////////////////////////////ex1//////////////////////////////////
let arr=[1,2,3,4];
console.log(arr.reverse())

/////////////////////////////////////////////////////ex2//////////////////////////////////
let arr2=[5,6,7,8]
console.log(arr.concat(arr2))
function merge (arr , arr2){
    return[...arr,...arr2]
}
console.log(merge(arr,arr2))
/////////////////////////////////////////////////////ex3//////////////////////////////////


let getSum = arr.reduce((total,value)=>{
   return total +=value ;
}
);
console.log(getSum)
/////////////////////////////////////////////////////ex4//////////////////////////////////
let getAvarage = arr.reduce((total,value)=>{
    
    total +=value ;
    return total =total/(arr.length)
 }
 );
 console.log(getAvarage)
 /////////////////////////////////////////////////////ex5//////////////////////////////////
 let common = [];
let arr3 =['a','b','c','d']
let arr4 =['l','a','f','d','c']
function comma_arr(arr3,arr4){
    for(let i=0;i<arr3.length;i++){
        for(let j=0;j<arr4.length;j++){
            if(arr3[i]===arr4[j]){
                common.push(arr3[i]);      
            }
        }

    }

}//try map and filter
comma_arr(arr3,arr4);
console.log(common)

////////////////////////////////////////////////////////ex5 use filter and map/////////////////////


