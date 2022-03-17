let body = document.querySelector('body');

body.style.fontFamily = 'sans-serif';
body.style.margin = '0 5rem'

let h1 = document.querySelector('h1');

h1.style.textAlign = 'center';

let category = document.querySelectorAll('.category');

category.forEach(item => {
    item.style.fontSize = '25px';
    item.style.fontStyle = 'italic';
    item.style.textDecoration = 'underline';
})

function colorGenerator() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let transp = Math.random().toFixed(1);
    let color = `rgba(${red}, ${green}, ${blue}, ${transp})`;
    return color;
}

let main = document.querySelector('main');

main.style.display = 'flex';
main.style.flexWrap = 'wrap';
main.style.gap = '20px'

let foodCategory = document.querySelectorAll('.food-category');

foodCategory.forEach(item => {
    item.style.backgroundColor = colorGenerator();
    item.style.display = 'flex';
    item.style.flexDirection = 'column';
    item.style.gap = '15px';
    item.style.padding = '1rem 3rem'
    item.style.flexGrow = '1';
})

let warning = document.getElementById('warning');

warning.style.fontSize = '25px';

let evenAllergiesInfo = document.querySelectorAll('.allergy-info:nth-child(2n)');

evenAllergiesInfo.forEach(item => {
    item.style.backgroundColor = '#87c8ee';
})

let allergyWarning = document.querySelector('.allergy-warning');

allergyWarning.style.display = 'flex';
allergyWarning.style.flexDirection = 'column';
allergyWarning.style.alignItems = 'center';

let allergies = document.querySelector('.allergies');

allergies.style.paddingRight = '40px';

let allergyInfo = document.querySelectorAll('.allergy-info');

allergyInfo.forEach(item => {
    item.style.width = '25rem';
    item.style.padding = '8px 4px'
    item.style.listStyleType = 'none';
})

let footer = document.querySelector('footer');

footer.style.display = 'flex';
footer.style.flexWrap = 'wrap';
footer.style.justifyContent = 'center';
footer.style.gap = '40px';
footer.style.marginTop = '2rem';

let foodDescription = document.querySelectorAll('.food-desc');

foodDescription.forEach(item => {
    item.style.border = '5px solid #fead01';
    item.style.borderRadius = '50%';
    item.style.padding = '30px';
    item.style.width = '70px'
    item.style.display = 'flex';
    item.style.justifyContent = 'center';
})