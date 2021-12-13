
// let inputValue=document.getElementsByTagName('input')[0];
// let Addtobutton=document.getElementsByTagName('button')[0];
// let divtodos=document.getElementsByClassName('todos')[0];
// var x=0;
// Addtobutton.onclick=displayInput;

// function displayInput(){
//     if(inputValue.value == "" || inputValue.value==0){
//         alert("invalid input")
//     }
//     else {
//         var insidetag=document.createElement('p');//<p key=0  >"Ajay"</p>
//         var attri=document.createAttribute('key');
//         var insidediv1=document.createElement('div');
//         attri.value=x;                        //key=0
//         insidetag.setAttributeNode(attri);
//         insidetag.innerHTML=inputValue.value;
//         divtodos.appendChild(insidetag);
//         inputValue.value="";
//         x++;
//         insidetag.onclick=function () { 
//             divtodos.removeChild(insidetag);
//         }
//     }
// }

// Todo Assignment from API file.

// let btnpending=document.querySelector('.Pending')
// let btncompleted=document.querySelector('.Completed')
var todos=document.querySelector('div.todos')
async function main(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await response.json();
        const todos = json.slice(0,10);
        console.log(todos);
    }catch(e){
        console.log(e);
    }

}
main()
var insideTag=document.createElement('p');
insideTag.innerHTML=todos;
todos.appendChild(insideTag);


