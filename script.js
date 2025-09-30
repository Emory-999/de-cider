function agerating(){
    var Age = document.getElementById("Age").value;
    document.getElementById("feedback").innerHTML = Age;
}
function Answer(){
    var output;
 var Party= document.getElementById("Party").innerHTML;
 var Salary = document.getElementById("Salary").innerHTML;
var Age = document.getElementById("Age").value;




if (Party== "Republican" && Age >= 25){
    output = "Vanilla";}

else if (Party== "Democrat" && Age <= 12){
    output= "Chocolate";}
else if (Party== "){
    output= "";}
// else if (){
//     output= "";}
// else if (){
//     output= "";}
// else if (){
//     output= "";}
// else if (){
//     output= "";}
// else if (){
//     output= "";}
// else if (){
//     output= "";}
// else if (){
//     output= "";}
// else if (){
//     output= "";}
// else if (){
//     output= "";}
// else if (){
//     output= "";}


document.getElementById("output").innerHTML = output}

