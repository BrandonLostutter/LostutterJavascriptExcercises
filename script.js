
function msg(){  
 alert("Hello Javatpoint");  
}  


//Excersice 1

var number = prompt("Enter a Number!")

var total = 0;

for (var num=1; num<="number"; num++) {
	  total = total + num;
}

console.log("The Total is: " + total);



//Excersice 2

if (confirm("Do you want to play?") == true) {
    prompt ("Enter a word");
} else {
    txt = "You pressed Cancel!";
}

