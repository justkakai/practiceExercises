/* 
1. Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples:

sumIntFrom1ToN(4) ➞ 10
sumIntFrom1ToN(13) ➞ 91
sumIntFrom1ToN(600) ➞ 180300
*/

let sum = 0;

let sumFrom1ToInt = (num) => {
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    console.log("Q1.", sum);
}

sumFrom1ToInt(600);

/* 
2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.

Examples:

sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes(2) ➞ 8
sumOfCubes() ➞ 0
*/

let cubesSum = 0;

let sumOfCubes = (number1, number2, number3) => {
    let cubesSum = number1**3 + number2**3 + number3**3; 
    console.log("Q2.", cubesSum);
}

sumOfCubes(2, 3, 4);

/* 
3. String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

Examples:

isStrStartOfWord("bu", "button") ➞ true
isStrStartOfWord("tri", "triplet") ➞ true
isStrStartOfWord("beau", "pastry") ➞ false
*/

let isStrStartOfWord = (str, word) => word.startsWith(str);

console.log("Q3.", isStrStartOfWord("comr", "comrade"));


/* 
4. Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

Examples:

isLEQZero(3) ➞ false
isLEQZero(0) ➞ true
isLEQZero(-4) ➞ true
isLEQZero(10) ➞ false
*/

let isLEQZero = (number) => number <= 0;

console.log("Q4.", isLEQZero(7));

/* 
5. Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

Example: countOccurrences("this is a string", "i") ➞ 3
*/

let occurrencesOfLetterInString = (str2, letter) => {
    array1 = str2.split(`${letter}`).length -1;
    console.log("Q5.", array1);
}

occurrencesOfLetterInString("hirhirhirhir", "r");

/* 
6. X To The Power of X. Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers.

Examples:

calcBaseToExponent(5, 5) ➞ 3125
calcBaseToExponent(10, 10) ➞ 10000000000
calcBaseToExponent(3, 3) ➞ 27
*/

let baseToExponent = (num2, num3) => {
    calculation = num2 ** num3;
    console.log("Q6.", calculation);
}

baseToExponent(3,4);

/* 
7. Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

Example:

dogAge(4) ➞ "Your doggo is 28 years old in dog years!"
*/

let ageInDogYears = (ageHuman) => {
    calc = ageHuman * 7;
    console.log(`Q7. Your doggo is ${calc} years old in dog years!`);
}

ageInDogYears(9);

/* 
8. A Lifetime Supply... You just won a lifetime supply of your favorite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". Create a function to help you calculate that amount for yourself. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

Examples:

calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"
*/

let calcLifetimeSupply = (age, dailyAmount) => {
    totalAmount = dailyAmount * 365.25 * (100 - age);
    console.log("Q8.", totalAmount);
}

calcLifetimeSupply(40, 3);

/* 
Bonus:

Accept a third argument for maximum age (just in case the snack company has a particular maximum age cut off).

Accept floating point values for amount per day and round the result (in case the snack company has some weird average calculation for amount per day).

calcLifetimeSupply(32, 0.58, 65) ➞ "The snack company should provide you with 6991 units, until you are a ripe old age of 65. Happy snacking!"
*/

calcLifetimeSupply = (age, dailyAmount, maxAge) => {
    totalAmount = dailyAmount * 365.25 * (maxAge - age);
    console.log("Q8-Bonus.", Math.round(totalAmount));
}

calcLifetimeSupply(32, 0.58, 65);

/* 
9. Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.

Examples:

isWaldoHere("is there a wal here?") ➞ false
isWaldoHere("I found you Waldo!") ➞ true
isWaldoHere("Wait, don't you mean Wally?") ➞ false
isWaldoHere("waldo is here") ➞ true
*/

let findWaldo = (str3) => str3.toLowerCase().includes("waldo");

console.log("Q9.", findWaldo("I found you Waldo!"));

/* 
10. Pie. Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

Total number of slices.
Number of recipients.
How many slices each person gets.
Examples:

isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices

isEqualSlices(8, 3, 2) ➞ true

isEqualSlices(8, 3, 3) ➞ false

isEqualSlices(24, 12, 2) ➞ true
*/

let isEqualSlices = (num4, num5, num6) => num5 * num6 <= num4;

console.log("Q10.", isEqualSlices(24, 12, 2));

/* 
11. XO. Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

Notes:

Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.
Examples:

isEqualNumXandOs("ooxx") ➞ true
isEqualNumXandOs("xooxx") ➞ false
isEqualNumXandOs("ooxXm") ➞ true (case insensitive)
isEqualNumXandOs("zpzpzpp") ➞ true (returns true if no x and o)
isEqualNumXandOs("zzoo") ➞ false
*/

let isEqualNumXandOs = (str4) => {
    let array2 = str4.toLowerCase().split('o').length -1;
    let array3 = str4.toLowerCase().split('x').length -1;
    if (array2 === array3) {
        console.log("Q11.", true);
    } else {
        console.log("Q11.", false);
    }
    
}

isEqualNumXandOs("zzoo");

/* 
12. isPrime? Create a function that returns true if a number is a prime number, and false if it's not. NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

Examples:

isPrime(7) ➞ true
isPrime(9) ➞ false
isPrime(10) ➞ false
*/

let isPrime = (num7) => {
    for (let i = 2; i < num7; i++) {
        if (num7 % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Q12.", isPrime(23));

/* 
13. Validate Email. Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

The string must contain exactly one "@" character
The string must contain at least one "." character
The "." and the "@" must be in the appropriate places:
neither "." nor "@" can be the last character
"." can neither be directly before, nor directly after, "@"
there cannot be consecutive "." characters
"@" must have at least one character in front of it
Examples:

"j@example.com" is valid while "@example.com" is invalid
e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid
e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid
*/

let validateEmail = (email) => email.split('.').length -1 >= 1 && email.split('@').length -1 === 1 && email.lastIndexOf('.') !== email[email.length -1] && email.lastIndexOf('@') !== email[email.length -1] && email.indexOf('@') !== 0 && !email.includes('@.') && !email.includes('.@') && !email.includes('..') && !email.includes('@com');


console.log("Q13.", validateEmail("john.@email.com"));