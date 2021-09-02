'use strict'

const email = document.getElementById('email');
const pass = document.getElementById('password');
const emailLab = document.querySelector('.email');
const passLab = document.querySelector('.password');

function validateEmail(email) {
   var re = /\S+@\S+\.\S+/;
   return re.test(email);
}

email.addEventListener('keyup', (e) => {
   if (validateEmail(e.target.value)) {
      emailLab.classList.add("good");
   }
   else if (emailLab.classList.contains("good")) {
      emailLab.classList.remove("good");
   }
});

pass.addEventListener('keyup', (e) => {
   if (e.target.value.length > 5) {
      passLab.classList.add("good");
   }
   else if (passLab.classList.contains("good")) {
      passLab.classList.remove("good");
   }
});