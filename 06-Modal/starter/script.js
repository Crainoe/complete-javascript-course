'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // function to open modal
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  // loop to open modal
  btnsOpenModal[i].addEventListener('click', openModal);
}

const closeModal = function () {
  // function to close modal
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal); // close modal when close button is clicked
overlay.addEventListener('click', closeModal); // close modal when overlay is clicked

document.addEventListener('keydown', function (e) {
  // console.log(e.key); // log key pressed
  // close modal when escape key is pressed
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
