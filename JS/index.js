//1.keyword: let
//2. variable: resuld
//3. expression: 1 + 2
//4.zuweisung: =
//5. terminator: ;
// ===> statment: 1 + 2;
let result = 1 + 2; //3
//6.funktion console.log
//7.argument or parameter: result
//8. terminator: ;
//==> statment: console.log(result);
console.log(result);
//codeblöcke: statments die zusammen gehören
{
    //1.keyword: let
    //2. variable: a
    //3.zuweisung: =
    //4. Konstante: 10
    //5. terminator: ;
    // ===> statment: 1 + 2;
    let a = 10;
    let b = 20;
    let c = a + b;
}
//operations
let a = 7;
let b = 3;
// addition
let sum = a + b;
//division
let differenz = a - b;
// addition
let produkt = a * b;
//division
let quotient = a / b;
//modulo (rest)
let remindor = a % b;
//exponentation(hochzahl)
let pwer = a ** b;
//expressions
let expressions = (a + b) * b;
// if else
if (a < b) {
    console.log("a is smaller than b");
    console.log("a: " + a);
    console.log("b: " + b);



} else {
    console.log("b is smaller than a")
}
// if else if else
if (a < b) {
    console.log("a is smaller than b");
    console.log("a: " + a);
    console.log("b: " + b);



} else if (a > b) {
    console.log("b is smaller than b");
} else {
    console.log("a is equal to b");
}
//comparision operations
// equal to
console.log(1 == 1);// true
//not equal
console.log(1 != 1);//false
//greader than
console.log(1 > 1);//false
//greader or equal than
console.log(1 >= 1);//true
//smaller than
console.log(1 < 1);//false
//smaller oer equal than
console.log(1 <= 1);//true
//Values and typs
let intiger = 213;// Zahlen
let floatingPoint = 3.14567579457947;//kommas //dezimalstellen immer . kein komma
let boolean = true; //Wahrheitswert

//String
let String1 = "Hello World";
let String2 = "IT is grat";
let String3 = "It is gerat";
//verkettung
let String4 = String2 + "IT is grat" + String3;
console.log(String1);
console.log(String2);
console.log(String3);
console.log(String4);
//loops
//for loop
for (let i = 0; i < 10; i = i + 1) { //i kann so oft erstellt werden wie mann will aber kann außerhalb des for nicht aufgerufenn werden wenn es dafor nicht definiert wurde
    console.log("Hannes");


}
for (let i = 0; i < 10; i++) {
    console.log("Hannes");


}

// functions
function sum(n1, n2) {
    return n1 + n2
}

n1 = 5;
n2 = 10;

resultSum = n1 * n2;

resultSum = sum(5, 10);

function linearStraight(x) {
    return 10 * x + 5
}

sum(10, 15);

// 1.keyword function
// 2. name of the function we want to declare
// 3. ()
// 4. with the bracket we can hand in parameters to the function
// 5. opening curly brace {
// 6. statments
// 7.optionally a return
// 8. closing curly brace }

function log(text, repeat) {

    // for loop:
    // 1. declrae variable i and initialize it to 1: let i = 1
    // 2. check the conditional expression if it still evaluates to true:
    //  (i < result), i   = 1 and repeat = 10 => 1 < 10 = true
    // 3. if the condistion is still true, then execute statements within the curly braces,
    //  in our case this is to execute the statement "console.log(i + ":" + text);"
    // 4. i = i + 1 => i = 1 + 1 => i = 2
    // 5. check the conditional expression if it still evaluates to true:
    // (i < result), i = 1 and repeat = 10 => 1 < 10 = true
    // 6. if the condition is still true, then execute statements within the curly braces,
    //   (i < result), i = 1 and repeat = 10 => 1 < 10 = true
    // 7. i = i + 1 => i = 1 + 1 => i = 3
    // 8. check the conditional expression if it still evaluates to true:
    //  (i < result), i = 3 and repeat = 3 => 3 < 3 => false
    //  => stop the loop continue after the loop
    // 9. execute the statment after the loop "console.log("value i is: " +1);"


    // outer scope of the for loop
    let i = 100;

    for (let i = 1; i < repeat; i = i + 1) {
        console.log(i + ":" + text); // inner scope of the for loop
    }

    // here we are in the outer scope again and hence i has the value 100
    console.log("value i is:" + i);
}
console.log("value i is:" + i);


log("hallo welt", 10)
log("hello world", 5)