// Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

let num1 = 78;
let num2 = 67;

if (num1>num2) {
 console.log("num1 is greater", num1) ; 
} else {
 console.log("num2 is greater", num2);  
}


// Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take single variable and check using if esle condition)

let num = 98;

if(num > 0) {
 console.log("positive", num);
} else if( num<0) {
 console.log("negative", num);
} else{
 console.log("zero", num);  
}


// Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

let number = 67;
if(number % 10 === 0) {
 console.log("number is divisible", number);  
} else{
 console.log("number is not divisible", number);   
}


// Solve the problem with Javascript  to check whether a number is even or odd.

let number1 = 35;
if(number % 2 === 0) {
console.log("number is even"); 
}else {
console.log("number is odd");   
}

// Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)


let temperature = 34;

if(temperature>=30){
console.log("weather is hot");  
}else if(temperature <=25) {
console.log("weather is cold")
}else{
 console.log("weather is normal")   
}


// Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

let num3 =7;
let result = (num3 % 2 ===0) ? "Even Number" : "Odd Number";
console.log(result);


// Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

let numOne = 35;
let numTwo = 5;

if(numOne>30 && numTwo>30){
console.log("Both numbers are greater than 30");   
} else{
console.log("Both numbers less than 30");    
}

// Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

let age = 73;

if(age >=13 && age<=19){
console.log("Teenager");   
} else{
console.log("Not a teenager");    
}