const header = document.querySelector('header');
const canvas = header.querySelector('.canvas');

window.addEventListener('scroll', function() {
  if (window.scrollY >= window.innerHeight) {
    canvas.classList.add('small');
    header.classList.add('small');
  } else {
    canvas.classList.remove('small');
    header.classList.remove('small');
  }
});

const label = document.querySelector('nav.fixheader label');
const bodyChild = document.querySelector('body > .fixheader');

function addBodyClassToLabel() {
  label.classList.add('small');
}

function removeBodyClassFromLabel() {
  label.classList.remove('small');
}

window.addEventListener('scroll', function() {
  if (window.scrollY >= window.innerHeight) {
    addBodyClassToLabel();
  } else {
    removeBodyClassFromLabel();
  }
});
