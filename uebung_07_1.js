/* BEGIN OF COMMENT
INPUT:
given are space separated integer numbers x1 x2 ... xN
example: 1 6 9 11

Output
calculate the sum of even numbers

Constrains
-100 <= x_i <= 100

EXAMPLE:
Input
1 2 3 4
Output
6
END OF COMMENT */


let input = "1 2 3 4 5 6 7 8 9 10";

let numbers = input.split(" ").map(Number);
let sum = 0;

for (let number of numbers) {
    if (number % 2 === 0) {
        sum += number;
    }
}
console.log(input);
console.log(sum);
