let listGroup = document.querySelector('.list-group');
let listGroupChildren = listGroup.children;

let body = document.querySelector('body');
let displaySelected = document.createElement('p');
body.appendChild(displaySelected);
displaySelected.classList.add('d-none', 'py-4', 'my-3', 'ps-3', 'mb-0', 'text-black', 'rounded-3');

listGroup.addEventListener('click', function(e) {
    [...listGroupChildren].forEach(sib => sib.classList.remove('active'));
    e.target.classList.add('active');
    displaySelected.classList.remove('d-none');
    displaySelected.textContent = `You have selected ${e.target.textContent}`;
})

let showButton = document.querySelector('.show-button');
let hideButton = document.querySelector('.hide-button')

showButton.addEventListener('click', function(e) {
    e.target.classList.add('d-none');
    hideButton.classList.remove('d-none');
    listGroup.classList.remove('d-none');
})

hideButton.addEventListener('click', function(e) {
    e.target.classList.add('d-none');
    showButton.classList.remove('d-none');
    listGroup.classList.add('d-none');
    [...listGroupChildren].forEach(sib => sib.classList.remove('active'));
    document.querySelector('a').classList.add('active');
    displaySelected.classList.add('d-none')
})






