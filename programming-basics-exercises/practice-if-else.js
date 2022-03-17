// 1. Write a JavaScript program that accept two integers and display the larger.

let x = 11;
let y = 7;
if (x > y) {
    console.log(x);
} else if (y > x) {
    console.log(y);
} else {
    console.log(x + "," + y);
}

/* 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. 
- Sample numbers : 3, -7, 2
- Output : The sign is - */

let a = 3;
let b = -7;
let f = 2;
if (a * b * f < 0) {
    console.log("-");
} else {
    console.log("+");
}

/* Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
- Sample numbers : 0, -1, 4
- Output : 4, 0, -1 */

let c = 0;
let d = -1;
let e = 4;
if (c > d && c > e && d > e) {
    console.log(c + ", " + d + ", " + e);
} else if (c > d && c > e && e > d) {
    console.log(c + ", " + e + ", " + d);
} else if (d > c && d > e && c > e) {
    console.log(d + ", " + c + ", " + e);
} else if (d > c && d > e && e > c) {
    console.log(d + ", " + e + ", " + c);
} else if (e > c && e > d && c > d) {
    console.log(e + ", " + c + ", " + d);
} else if (e > c && e > d && d > c) {
    console.log(e + ", " + d + ", " + c);
} 

/* 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
- Sample numbers : -5, -2, -6, 0, -1
- Output : 0 */

a = -5;
b = -2;
c = -6;
d = 0;
e = -1;
if (a > b && a > c && a > d && a > e) {
    console.log(a);
} else if (b > a && b > c && b > d && b > e) {
    console.log(b);
} else if (c > a && c > b && c > d && c > e) {
    console.log(c);
} else if (d > a && d > b && d > c && d > e) {
    console.log(d);
} else if (e > a && e > b && e > c && e > d) {
    console.log(e);
}

/* Write a JavaScript program to sum the multiples of 3 and 5 under 1000. */

let sum = 0;
for (let x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);

