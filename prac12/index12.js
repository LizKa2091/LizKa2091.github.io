const showMessage = str => console.log(str);

const changeBackgroundColor = color => document.querySelector('body').style.backgroundColor = color;

const toggleVisibility = selector => {
    const el = document.querySelector(selector);
    el.style.display === 'block' ?  el.style.display='none' : el.style.display='block';
};

const term = () => {
    const queryParams = new URLSearchParams(window.location.search);
    let term = queryParams.get('utm_term');
    const h1El = document.querySelector('h1');
    console.log(term)
    if (term) h1El.textContent = term;
};

const logCurrentTime = () => {
    const today = new Date().toLocaleTimeString();
    console.log(today)
};

const resetBackgroundColor = () => {
    const el = document.querySelector('body');
    el.style.backgroundColor = 'aquamarine';
};

showMessage('скрипт загружен');
logCurrentTime();
resetBackgroundColor();
term();

window.addEventListener('DOMContentLoaded', ()=> {
    changeBackgroundColor('lightblue');
    toggleVisibility('.container');
});

