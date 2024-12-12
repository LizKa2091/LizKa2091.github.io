const submitBtn = document.querySelector('button');

const formData = {
    name: document.getElementById('name')
};


submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    submitForm();
});
const submitForm = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');
    const comment = document.getElementById('comment');

    const telOnlyNums = tel.value.split('').filter(e => ('0' <= e <= '9'));
    console.log();
    if (name.value !== '' && email.value !== '' && comment.value !== '' && (phone.value.length === telOnlyNums.length) && email.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {

    }
};
//phone.value.split('').forEach(el => ('0' < el <= '9'))