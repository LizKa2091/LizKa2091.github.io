//часть 1
/*
const heading1 = document.querySelector('h1');
const heading2 = document.querySelector('h2');
const p = document.querySelector('p');
const video = document.querySelector('video');

heading1.textContent = 'Добро пожаловать на наш сайт!';
heading2.style.color = 'red';
p.textContent = 'Это новый текст параграфа';
video.style.display = 'none';
*/

//часть 2 и часть 3
const form = document.querySelector('form');
form.addEventListener('submit', (e) => submitForm(e));

const submitForm = (e) => {
    e.preventDefault();

    const formData = {
        name: form.elements['name'].value,
        email: form.elements['email'].value,
        tel: form.elements['tel'].value,
        date: form.elements['date'].value,
        desc: form.elements['desc'].value,
        printData: function() {
            console.log(`имя: [${this.name}], e-mail: [${this.email}], tel: [${this.tel}], date: [${this.date}], desc: [${this.date}]`)
        }
    };

    let isTelCorrect = formData.tel.match(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/) === null ? false : true;
    let isEmailCorrect = formData.email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i) === null ? false : true;

    if (formData.name === '' || !isTelCorrect || !isEmailCorrect) {
        console.log('что-то введено неправильно')
    }
    else formData.printData();
};
