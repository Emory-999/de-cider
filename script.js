function agerating(){
    var Age = document.getElementById("Age").value;
    document.getElementById("feedback").innerHTML = Age;
}
function Answer(){
    var output;
 var Party= document.getElementById("Party").value;
 var Salary = document.getElementById("Salary").value;
var Age = document.getElementById("Age").value;

if (Party== "Republican" && Age >= 25 && Salary != "really rich"){
    output = "Vanilla";
}
else if (Party== "Democrat" && Age >= 13 && Salary != "really rich"){
    output= "Chocolate";}
else if (Party== "Democrat" && Age <= 12 && Salary != "really rich"){
    output= "Cotton Candy";}
else if (Party== "Libertarian" && Age <= 24 && Salary != "really rich"){
    output= "Strawberry";}
else if (Party== "Green" && Age >= 50 && Salary != "really rich"){
    output= "Pistachio";}
else if (Party== "Republican" && Age <= 24 && Salary != "really rich"){
    output= "Mint Chocolate Chip";}
else if (Party== "Libertarian" && Age >= 25 && Salary != "really rich"){
    output= "Cookies and Cream";}
else if (Party== "Green" && Age <= 49 && Salary != "really rich"){
    output= "Chocolate Chip Cookie Dough";}
else if (Party== "Other" && Age >= 12 && Salary != "really rich"){
    output= "Butter Pecan";}
else if (Party== "Other" && Age <= 11 && Salary != "really rich"){
    output= "Coffee";}
else{
    output= "Cider Ice Cream!!"
}

document.getElementById("output").innerHTML = output}

