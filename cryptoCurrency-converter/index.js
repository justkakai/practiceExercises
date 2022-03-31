const corsOptions = {
    mode:"no-cors"
};

let crypto = document.getElementById('inputGroupSelect01');
let currency = document.getElementById('inputGroupSelect03');
const convertButton = document.getElementById('convert-button');
const resetButton = document.getElementById('reset-button');
const currencyDisplay = document.getElementById('display-currency');
const cryptoDisplay = document.getElementById('display-crypto');

convertButton.addEventListener('click', fetchRate);

async function fetchRate() {
    try {
        const response = await fetch(`https://free.currconv.com/api/v7/convert?q=${crypto.value}_${currency.value}&compact=ultra&apiKey=2b8981cc6a116ada60d0`);

        const dataJson = await response.json();

        let exchangeRate = Object.values(dataJson)[0];

        currencyDisplay.value = (cryptoDisplay.value * exchangeRate).toFixed(2);

        console.log(dataJson);
    } catch (error) {
        console.log(error);
    }
};

resetButton.addEventListener('click', function() {
    cryptoDisplay.value = '';
    currencyDisplay.value = '';
});

