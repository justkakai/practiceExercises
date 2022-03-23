const submitBtn = document.getElementById('btn');

submitBtn.addEventListener('click', function(e) {
    let para2 = document.querySelector('p').nextElementSibling;
    let inputField = document.getElementById('username');
    let weekday = new Date().getDay();
    let options = { weekday: 'long'};
    let userName = inputField.value || 'Stranger';
    let dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(new Date());
    //const dayOfWeek = new Date().toLocaleDateString('en-US', options);

    e.preventDefault();
    para2.textContent = weekday > 0 && weekday < 5 ? 
        `Hello ${userName} 👋 Today is ${dayOfWeek}. Only ${5 - weekday} days left until the weekend!` : 
        `Guess what ${userName} ...it's the weekend, yay! 🥂`
    inputField.value = '';
});