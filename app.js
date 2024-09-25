// questions 12-13

var character=prompt("Enter a character");
character=character.charCodeAt();
if(character>=65 && character<=90){
    console.log(`The character is a Uppercase Letter`)
}
else if(character>=97 && character<=122){
    console.log(`The character is a Lowercase Letter`)
}
else if(character>=48 && character<=57){
    console.log(`The character is a Number`)
}

var num1=prompt("Enter first number");
var num2=prompt("Enter second number");
if(num1>num2){
    console.log(`The first number is greater that is ${num1}`)
}
else if(num1<num2){
    console.log(`The Second number is greater that is ${num2}`)
}
else if(num1==num2){
    console.log(`Both numbers are equal!`)
}

var num3=prompt("Enter a number");
if(num3>0){
    console.log("The number is Positive")
}
else if(num3<0){
    console.log("The number is Negative")
}
else if(num3==0){
    console.log("The number is Zero!")
}

var char=prompt("Enter an Alphabet to check if its a vowel or consonant");
charCode=char.toUpperCase();
if (charCode=="A"|| charCode== "E"||charCode== "I"||charCode== "O"||charCode=="U"){
    console.log("The character is a Vowel")
}
else( console.log("character is a consonant"))

var correctPassword="Hiba";
var password=prompt("Enter a password");
if(password===""){
    alert("Enter a password!!!!!!")
    var password=prompt("Enter a password");
}
else if (password===correctPassword){
    alert("Correct password!")
}
else(
    alert("Incorrect Password!")
)


var greetings;
var hour=13;
if (hour<18){
    greetings="Good Day"
}
else (greetings="Good Evening")


var time=prompt("Enter a time of your choice in manner 1730 for 2:30pm");
if (time[0]>2||time[2]>5){
    alert("Invalid time!")
    time=prompt("Enter a time of your choice in manner 1730 for 2:30pm");
}
if(time>=0 && time<1200){
    alert("Good Morning")
}
else if(time>=1200 && time<1700){
    alert("Good AfterNoon")
}
else if(time>=1700 && time<2100){
    alert("Good Evening")
}
else if(time>=2100 && time<2359){
    alert("Good Night")
}

// questions 14-16


var studentName=[];
var array1=["Hello","Thankyou","Welcome"];
var array2=[1,2,3,4,5];
var array3=[true,false];
var array4=[1,"Hiba",2,"Areej",true,undefined];
var qualification=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
console.log(`Qualifications:`);
console.log(qualification);
studentName=["Ali","Hurmat","Taha"];
var scores=[320,370,480];
var percentage=[320*0.2,370*0.2,480*0.2];
console.log(`Score of ${studentName[0]} is ${scores[0]}.Percentage: ${percentage[0]}`);
console.log(`Score of ${studentName[1]} is ${scores[1]}.Percentage: ${percentage[1]}`);
console.log(`Score of ${studentName[2]} is ${scores[2]}.Percentage: ${percentage[2]}`);

var colorNames=[prompt("what color do you want at the begining of the array"),prompt("what color do you want at the end of the array")];
console.log(colorNames);
colorNames.unshift("blue","green","grey","orange","golden","peach");
console.log(colorNames);
colorNames.shift();
console.log(colorNames);
colorNames.pop();
console.log(colorNames);
var num=prompt("at what index do you want a new color?");
colorNames.splice(num,0,"purple");
console.log(colorNames);
var num2=prompt("at what index do you want to delete a color?");
var num3=prompt("how many colors do u wantto delete?");
colorNames.splice(num2,num3);
console.log(colorNames);

var array10=[34,65,76,43,50];
console.log(`Scores of students ${array10}`)
console.log(`Ordered scores of students ${array10.sort()}`)

var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities=cities.slice(2,4);
console.log(`Cities list ${cities}`);
console.log(`Selecte Cities list ${selectedCities}`);

var array12=["This","is","my","cat"]
console.log(`Array: ${array12}`);
console.log(`Array: ${array12.join("  ")}`);

var array13=["keyboard","mouse","printer","monitor"]
for(i=0;i<array13.length;i++){
    console.log(`Out: ${array13[i]}`)
}

var array14=["keyboard","mouse","printer","monitor"]
for(i=array14.length-1;i>=0;i--){
    console.log(`Out: ${array13[i]}`)
}


var phoneManufacturers=["apple","samsung","motorola","nokia","sony","haier"];
for(i=0;i<phoneManufacturers.length;i++){
    document.write(`${phoneManufacturers[i]} </br>`);
}
