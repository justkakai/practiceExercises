/* 
Exercise 1:
Create an object to store book details, making sure it contains at least the following information:

title
author
publication year
number of pages
Add any other information you want.

Save the book in a variable and use a console.log() to print a message like this:

The book "The Hitchhiker's Guide to the Galaxy" was written by Douglas Adams. It's 193 pages long and was published in 1979
*/

let book = {
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    publicationYear: 1987,
    numberOfPages: 400,
    genre: 'coming-of-age'
}

console.log(`${book.title} is a ${book.numberOfPages}-page, ${book.genre} novel by ${book.author} that was published in ${book.publicationYear}.`);

/* 
Exercise 2
Create an object to store movie details:

title
director
year
duration
Add also a method called info() that when used prints a description of the movie to the console, like:

Title: Frances Ha
Director: Noah Baumbach
Year: 2012
Duration: 86 minutes
*/

let movie = {
    title: 'Grave of the Fireflies',
    director: 'Isao Takahata',
    year: 1988,
    duration: '89 minutes',
    info: function() {
        return `Title: ${movie.title} \nDirector: ${movie.director} \nYear: ${movie.year} \nDuration: ${movie.duration}`;
    }
}

console.log(movie.info());

/* 
Exercise 3
Create an object that represents a box, containing the following properties:

width
length
height
Write a function called boxVolume that accepts an object as a parameter and returns the volume of the box.

The formula to calculate the volume of a box is: width * length * height
*/

let box = {
    width: 7,
    length: 5,
    height: 10,
}

function boxVolume(container) {
    let volume = container.width * container.length * container.height;
    return volume;
}

console.log(boxVolume(box));

/* 
Exercise 4
Following the steps in exercise 3, this time create 2 boxes.

Write a function that accepts 2 objects as parameters, calculates the volume for both of them and returns the biggest value of the 2
*/

let box2 = {
    width: 13,
    length: 8,
    height: 6,
}

function largerBoxVolume(container1, container2) {
    let volume1 = container1.width * container1.length * container1.height;
    let volume2 = container2.width * container2.length * container2.height;
    let largerVolume = Math.max(volume1, volume2);
    return largerVolume;
}

console.log(largerBoxVolume(box, box2));