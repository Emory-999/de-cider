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
else if (Party== "Libertarian" && Age >= 17){
    output= "Strawberry";}
else if (Party== "Green" && Age >= 80){
    output= "Pistachio";}
else if (Party== "Republican" && Age >= 6){
    output= "Mint Chocolate Chip";}
else if (Party== "Libertarian" && Age >= 32){
    output= "Cookies and Cream";}
else if (Party== "Green" && Age <= 48){
    output= "Chocolate Chip Cookie Dough";}
else if (Party== "Other" && Age >= 12){
    output= "Rocky Road";}
else if (Party== "Other" && Age <= 11){
    output= "Butter Pecan";}
else if (Party== "Other" && Age >= 21){
    output= "Coffee";}
else if (Party== "Republican" && Age < 10){
    output= "Birthday Cake";}
else if (Party== "Democrat" && Age <= 99){
    output= "Cotton Candy";}
else if (Party== "Democrat" && Age <= 1){
    output= "Cider";}


document.getElementById("output").innerHTML = output}


