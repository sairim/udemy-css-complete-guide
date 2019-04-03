// Show and hide the modal

var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    backdrop.classList.add('open');
    modal.classList.add('open');  
  })
}

function closeModal () {
  backdrop.classList.remove('open');
  if (modal) {
    modal.classList.remove('open');
  }
}

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

// Show and hide the side nav bar

var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', () => {
  backdrop.classList.add('open');
  mobileNav.classList.add('open');
})

;