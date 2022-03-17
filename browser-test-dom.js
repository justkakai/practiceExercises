let attempts = 0;
let exit = false;

let randomNum = Math.ceil(Math.random() * 10);
window.alert(randomNum);

let guessedNumber = window.prompt(`Guess a number between 1-10`);

while (exit === false) {
    if (parseInt(guessedNumber) === randomNum) {
        attempts++;
        exit = true;
        window.alert(`Success, the number was ${guessedNumber}! Attempts: ${attempts}`);
    } else {
        while (attempts < 2 && parseInt(guessedNumber) !== randomNum) {
            attempts++;
            exit = false;
            guessedNumber = window.prompt(`Wrong!!! Try again!`);
        } 
        if (attempts === 2 && parseInt(guessedNumber) !== randomNum) {
            exit = true;
            window.alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNum}!`); 
        }
    }
} 