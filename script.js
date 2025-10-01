//This lets you input age on a slider
function agerating(){
    var Age = document.getElementById("Age").value;
    document.getElementById("feedback").innerHTML = Age;
}

//This gets the element Id from the party, salary, and age you input.
function Answer(){
    var output;
 var Party= document.getElementById("Party").value;
 var Salary = document.getElementById("Salary").value;
var Age = document.getElementById("Age").value;
//This makes it so if your ... is ... then Vanilla will appear in the html
if (Party== "Republican" && Age >= 25 && Salary != "really rich"){
    output = "Vanilla";
    document.getElementById("image").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhWcCJbUESapVgTJ6gM26zEg_Kx3UEDbYpg&s"
}
//This makes it so if your ... is ... then Chocolate will appear in the html
else if (Party== "Democrat" && Age >= 13 && Salary != "really rich"){
    output= "Chocolate";
    document.getElementById("image").src = "https://delightfuladventures.com/wp-content/uploads/2024/09/vegan-chocolate-ice-cream-recipe.jpg"
}
//This makes it so if your ... is ... then Cotton Candy will appear in the html
else if (Party== "Democrat" && Age <= 12 && Salary != "really rich"){
    output= "Cotton Candy";
    document.getElementById("image").src ="https://www.thechunkychef.com/wp-content/uploads/2023/07/Cotton-Candy-No-Churn-Ice-Cream-recipe-card.jpg"
}
//This makes it so if your ... is ... then Strawberry will appear in the html
else if (Party== "Libertarian" && Age <= 24 && Salary != "really rich"){
    output= "Strawberry";
document.getElementById("image").src = "https://www.adashofmegnut.com/wp-content/uploads/2022/09/Strawberry-Ice-Cream-1.jpg"
}
//This makes it so if your ... is ... then Pistachio will appear in the html
else if (Party== "Green" && Age >= 50 && Salary != "really rich"){
    output= "Pistachio";
document.getElementById("image").src = "https://i.pinimg.com/564x/7c/61/c9/7c61c9f8cba6d60502b46454f659a344.jpg"
}
//This makes it so if your ... is ... then Mint Chocolate chip will appear in the html
else if (Party== "Republican" && Age <= 24 && Salary != "really rich"){
    output= "Mint Chocolate Chip";
document.getElementById("image").src = "https://www.simplystacie.net/wp-content/uploads/2018/06/Mint-Chocolate-Chip-Ice-Cream-LOW-RES-33.jpg"
}
//This makes it so if your ... is ... then Cookies and Cream will appear in the html
else if (Party== "Libertarian" && Age >= 25 && Salary != "really rich"){
    output= "Cookies and Cream";
document.getElementById("image").src = "https://www.daringgourmet.com/wp-content/uploads/2023/07/Cookies-and-Cream-Ice-Cream-Recipe-3.jpg"
}
//This makes it so if your ... is ... then Chocolate Chip cookie dough will appear in the html
else if (Party== "Green" && Age <= 49 && Salary != "really rich"){
    output= "Chocolate Chip Cookie Dough";
document.getElementById("image").src = "https://celebratingsweets.com/wp-content/uploads/2023/04/Cookie-Dough-Ice-Cream-9.jpg"
}
//This makes it so if your ... is ... then Butter Pecan will appear in the html
else if (Party== "Other" && Age >= 12 && Salary != "really rich"){
    output= "Butter Pecan";
document.getElementById("image").src = "https://feelslikehomeblog.com/wp-content/uploads/2023/04/No-Churn-Butter-Pecan-Ice-Cream-Recipe-square.png"
//This makes it so if your ... is ... then Coffee will appear in the html
else if (Party== "Other" && Age <= 11 && Salary != "really rich"){
    output= "Coffee";
document.getElementById("image").src = "https://everydaypie.com/wp-content/uploads/2024/06/Homemade-Coffee-Ice-Cream-16.jpg"
}
//This makes it so if your ... is ... then Cider Ice cream! will appear in the html
else{
    output= "Cider Ice Cream!!"
document.getElementById("image").src = "https://buttermilkbysam.com/wp-content/uploads/2018/12/apple-cider-caramel-ice-cream-5.jpg"
}
//This makes it so it will appear in the html because the html becomes the output
document.getElementById("output").innerHTML = output}
