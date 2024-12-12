const modal = document.getElementById("modal");
const btn = document.querySelectorAll(".open-modal");
const span = document.querySelector(".close");
const form = document.getElementById("contact-form");
const blurredEls = document.querySelectorAll('.blurred');
const submitButton = document.querySelector('.submit-form');

const formStatusMessage = document.querySelector('.form-status');

btn.forEach(el => el.onclick = function() {
    modal.style.display = 'flex';
    modal.style.top = "15%";
    modal.style.left = '30%';
    for (let el of blurredEls) {
        el.style.filter = 'blur(2px)';
    }
});
span.onclick = function() {
    modal.style.display = "none";
    formStatusMessage.style.display = 'none';
    for (let el of blurredEls) {
        el.style.filter = 'blur(0)';
    }
};
submitButton.onclick = function(e) {
    e.preventDefault();
    formStatusMessage.style.display = 'inline';
    
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


