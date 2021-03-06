'use strict';

///////////////////////////////////////
// Modal window

const Signupform = document.querySelector('.Signupform');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  Signupform.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  Signupform.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn =>btn.addEventListener("click",openModal));



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !Signupform.classList.contains('hidden')) {
    closeModal();
  }
});
