// Show and hide the modal

var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    setTimeout(function () {
      backdrop.classList.add('open');
    }, 200)
    backdrop.style.display = 'block';
    modal.classList.add('open');
  })
}

function closeModal () {
  setTimeout(function () {
    backdrop.classList.remove('open');
  }, 200)
  backdrop.style.display = 'none';
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
  setTimeout(function () {
    backdrop.classList.add('open');
  }, 200)
  backdrop.style.display = 'block';
  mobileNav.classList.add('open');
})