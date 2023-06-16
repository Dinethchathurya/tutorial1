window.onload=function(){
    getMarks()
}

function getMarks (){
   var total=0;
  
 for(var i=0; i<5; i++){
    var marks = parseInt(window.prompt("enter no",i+1));
   total+=marks;

 }
 var avg=total/5;
 document.write("total: ",total);
 document.write("<br/>");
 document.write("Average: ",total/5);

 var button=document.createElement("button");
 button.innerHTML="GRADE";
 button.onclick=function(){
    if (avg>30)
    alert("congratulations!")
    else
    alert("butter luck next time");
}
document.body.appendChild(button);
}