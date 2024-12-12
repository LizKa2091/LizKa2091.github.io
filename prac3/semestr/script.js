const h1 = document.querySelector('h1');
const leverButton = document.querySelector('.table-2-lever');
const tableSem1 = document.querySelector('.table-2__first');
const tableSem2 = document.querySelector('.table-2__second');

h1.addEventListener('click', ()=>alert('Вы кликнули на заголовок - так держать!'));
leverButton.addEventListener('click', ()=>{
    if (tableSem1.classList.contains('unactive')) {
        leverButton.textContent = 'Прейти ко 2 семестру';
    }
    else {
        leverButton.textContent = 'Прейти к 1 семестру'
    }

    tableSem1.classList.toggle('unactive');
    tableSem2.classList.toggle('unactive');

});

const button = document.querySelector('.lessons-block__button');
const table = document.querySelector('.table-1');
button.addEventListener('click', ()=>table.style.display='block');