'use strict'

const tab = document.querySelectorAll('.tab');
tab.forEach((elem) => {
   elem.addEventListener('click', (e) => {
      let parentElem = elem.parentNode;
      let contentBlock = parentElem.querySelector('.content');
      if (contentBlock.classList.contains('active')) {
         contentBlock.classList.remove('active');
      }
      else {
         contentBlock.classList.add('active');
      }
   });
});