const header = document.querySelector('header');
const canvas = header.querySelector('.canvas');
const label = document.querySelector('nav.fixheader label');
const bodyChild = document.querySelector('body > .fixheader');

const remainingHeight = window.innerHeight - header.offsetHeight;

function addBodyClassToLabel() {
  label.classList.add('small');
  canvas.classList.add('small');
  header.classList.add('small');
}

function removeBodyClassFromLabel() {
  label.classList.remove('small');
  canvas.classList.remove('small');
  header.classList.remove('small');
}

window.addEventListener('scroll', function() {
  if (window.scrollY >= remainingHeight) {
    addBodyClassToLabel();
  } else {
    removeBodyClassFromLabel();
  }
});
