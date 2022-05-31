window.document.write("<h1>IF Statement Array Assignment")

var students = [];

var names = ["Fahad", "Mushtaq", "Asif", "Ghaffar", "Aziz"];

var numbers = [1,2,3,4,5,6,7,8,9,0];

var booleans = [true, false];

var mixed = ["fahad", 111, true, "SMIT", 0605, false];

var networks = ["Zong", "Warid", "Jazz", "U-Fone", "Telenor"];

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS"];
console.log(qualifications);

for(var i = 0; i <qualifications.length; i++){
    if(i === 0){
        window.document.write("<h2>Qualifications in Pakistan: </h2>" +  "<p>"+qualifications[i]+"</p>")
    } 
    else{
        window.document.write("<p>"+qualifications[i]+"</p>")
    }
   
}

var movies = [];

movies.push("Age of Ultron");
movies.push("Jurassic World");
movies.push("In the Heart of the Sea");


for(var i = 0; i <movies.length; i++){
    if(i === 0){
        window.document.write("<h2>Top Movies in 2015: </h2>" +  "<p>"+movies[i]+"</p>")
    } 
    else{
        window.document.write("<p>"+movies[i]+"</p>")
    }
  
  
}
window.document.write("Length of the Array is " + movies.length);

window.document.write("<h2>Fav Cars</h2>");

var cars = ["Audi", "Porche", "Tesla"];

document.write("First Index of the array is : " + 0 + "<p></p>");

document.write("Car at first index is : " + cars[0]+ "<p></p>");

document.write("Last index of the array is: "+ cars.length + "<p></p>" );

document.write("car at last index: "+ cars[2]);

var studentNames = ["Fahad", "Rafiq", "Jabbar"];

var nos = [300 , 400 , 350];

var marks = 500;

for ( var i = 0; i <studentNames.length; i++ ){
    var Percentage = nos[i] / marks * 100 ;
    document.write("Score of " + studentNames[i] + " is " + nos[i] + " Percentage " + Percentage + "% <p></p>")
    console.log()
}

var scores = [200, 225, 180, 500, 320];
document.write(scores + " Score before sorting <p></p>")

document.write(scores.sort() + " Score After Sorting <p></p>")

var fruits = ["strawberry", "apple", "orange", "banana"];

document.write(fruits + " Fruits before sorting <p></p>")

document.write(fruits.sort() + " Fruits After Sorting <p></p>");

var cities = ["karachi", "lahore", "Islamabad", "Quetta", "Peshawar"];

var selectedCities = cities.slice(0, 3);

document.write(cities + " All Cities <p></p>")

document.write(selectedCities + " Selected Cities <p></p>");

var arr = ["This", " is"," my"," cat"];;

alert(arr.join('') + " converted array into string using Join method");

var devices = [];

// devices.push("Keyboard");

// devices.push("Mouse");
// devices.push("Monitor")
// console.log(devices)
// devices.pop();
// devices.pop();
// devices.pop();
// console.log(devices, "pop")
// alert(devices)


// document.write("<select><option>" + companies[0] + "</option>" + "<option>" + companies[1] + "</option>" + "</select>" + "<select><option>" + companies[3] + "</option>" + "<option>" + companies[4] + "</option>" + "</select>")

// Muli Dimensinal Array

var multiples = [0,1,2,0,1,2,0,1,2];

document.write("<h2>Multi Dimensional Array</h2>"+ multiples[0] , multiples[1] , multiples[2] + "<p></p>")

document.write(multiples[0] ,  multiples[1] , multiples[2] + "<p></p>")

document.write(multiples[0] , multiples[1] , multiples[2] + "<p></p>")

var companies = ["Nokia", "Samsung", "Huawei", "Apple"];
for(var i = 0; i <companies.length; i++){
    if(i === 0){
        document.write("<select><option>"+ companies[i] + "</option>")
    }
    
    else{
        console.log(companies[i]);
    document.write("<option>"+ companies[i] + "</option>")
}}