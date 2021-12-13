var pendingtodo=document.getElementById("pend");
var completedtodo=document.getElementById("comp");
// -----------------------------------------------------------------
// getting data in to my js file by using async and await 
const url = "https://jsonplaceholder.typicode.com/todos";
async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
// -----------------------------------------------------------------
// The data we got is an array ,on iterating we check weather the completed is True or False
    for (var i=0;i<data.length;i++){
        var apiData=data[i]
        if(apiData.completed==false){
            var pendingItem=document.createElement("ol");
            pendingItem.innerHTML=apiData.title;
            console.log(pendingItem.innerHTML);
            pendingtodo.appendChild(pendingItem);
        }else{
            var completedItem=document.createElement("ol");
            completedItem.innerHTML=apiData.title;
            completedtodo.appendChild(completedItem);
        }
    }
}
getapi(url);
