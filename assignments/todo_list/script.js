// var maindiv=document.querySelector('div')
// var input=maindiv.children[0]
// var button=maindiv.children[1]
// var divtodos=document.querySelector('.todos')
// button.addEventListener("click" ,displayInput);

// function displayInput(){

//    var x = input.value;
//    var p=document.createElement('p');
//    p.innerText=x;
//    divtodos.appendChild('p');

// }

let inputValue=document.getElementsByTagName('input')[0];
let Addtobutton=document.getElementsByTagName('button')[0];
let divtodos=document.getElementsByClassName('todos')[0];

var x=0;
Addtobutton.onclick=displayInput;
function displayInput(){
    if(inputValue.value == "" || inputValue.value==0){
        alert("invalid input")
    }
    else {
        var insidetag=document.createElement('p');//<p key=0  >"Ajay"</p>
        var attri=document.createAttribute('key');
        attri.value=x;                        //key=0
        insidetag.setAttributeNode(attri);
        insidetag.innerHTML=inputValue.value;
        divtodos.appendChild(insidetag);
        inputValue.value="";
        x++;
        insidetag.onclick=function () { 
            divtodos.removeChild(insidetag);
        }
    }
}


