// let div = document.createElement("div")
// let text = document.createTextNode("this is parent")
// div.appendChild(text)
// // function CreateItem(){
//  document.body.appendChild(div)

// }
// document.getElementById("btn").addEventListener("click",CreateItem)
// div.remove()

//////////////////////////////////////////convert to//////////////////////////////////////////
function convertString() {
   
  }
 let x=0;

document.getElementById("btn_convertS").addEventListener('click',()=>{
     x = String(document.getElementById('dataField').value);
     
    let outputData = document.getElementById('outputData').textContent=`value is "${x}",convert to ${typeof x} `;   
});

document.getElementById("btn_convertN").addEventListener('click',()=>{
    
     x = parseFloat(document.getElementById('dataField').value);
     if(isNaN(x)){
        let outputData = document.getElementById('outputData').textContent=`value is not number  `;   
     }else{
    let outputData = document.getElementById('outputData').textContent=`value is ${x} ,convert to ${typeof x} `;   
     }
});
document.getElementById("btn_convertA").addEventListener('click',()=>{
    x = (document.getElementById('dataField').value).split('');
    x= JSON.stringify(x)
    let outputData = document.getElementById('outputData').textContent=`value is ${x} ,convert to Array `; 
});


//////////////////////////////////////////type of//////////////////////////////////////////
// document.getElementById("btnType").addEventListener('click',()=>{
//     let inputvalue = document.getElementById('dataField').value;
//     // let x = '';
//     // if(isNaN(inputvalue)){
//     outputvalue=document.getElementById('outputData').textContent=`value is ${typeof inputvalue}`;
        
//     // }else if(!isNaN==inputvalue){
//         // x= document.getElementById('outputData').textContent=`value is Number`;

//     // }else if(inputvalue[0]=='['){
       
//     // }

//     // }
// });



