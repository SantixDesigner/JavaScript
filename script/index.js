/* /* console.log("Hola Mundo");
//Comment inline
/*Comment 
in
block*/
//Recommended form
/* let number = 1234;
const VARIABLE = 4321; */
//ERROR: VARIABLE = 2;
//Unrecommended form
/* var name = 'Andres'; */
/* console.log(typeof (number)); */

/* let number1 = 4;
let number2 = 5;
let additionResult = number1 + number2;
let multiplicationResult = number1 * number2;
let divisionResult = number1 / number2;
let restResult = number1 - number2;
console.log("The addition is: ",additionResult);
console.log("The result of multiplication is",multiplicationResult);
console.log("The division is: ",divisionResult);
console.log("The rest is: ",restResult);

let text1 = "Andrés";
let text2 = "Maria";
console.log(text1 + " " + text2);
 */
/* let name2 = prompt("Ingrese el nombre de la persona");
console.log("Tu nombre es: ",name2); */

/* let number1 = prompt("Ingrese numero");
let number2 = prompt("Ingrese numero");
let number3 = parseInt(prompt("Ingrese tercer numero"));

number1 = parseInt(number1);
number2 = parseInt(number2);

let resultAddition = number1+number2+number3;


alert(resultAddition); */
let names = prompt("Enter your name");
let edad = prompt("Enter years");
let years = prompt("Enter in years");

edad = parseInt(edad);
years = parseInt(years);

alert("Your name is: "+names+", your age is: "+edad+" and in "+years+" years, you are going to have "+(edad+years)+" years");
