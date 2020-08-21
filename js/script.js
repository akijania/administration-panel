const activatePage = function (event) {
  event.preventDefault();
  const clickedElement = this;

  const activeSections = document.querySelectorAll('section.active');

  for (let activeSection of activeSections) {
    activeSection.classList.remove('active');
  }

  const clickedHref = clickedElement.getAttribute('href').replace('#', '');;
  const clickedSection = document.getElementById(clickedHref);
  clickedSection.classList.add('active');

};
const links = document.querySelectorAll('.sidebar li a');

for (let link of links) {
  link.addEventListener('click', activatePage);
}


function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('showMenu', visible)
};

document.querySelector('.hamburger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu()
});

function closeModal() {
  document.getElementById('overlay').classList.remove('show')
}
document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    closeModal()
  })
})
document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal()
  }
})
document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal()
  }
})

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector(modal).classList.add('show')
}
const quitLinks = document.querySelectorAll('.quit');

for (let quitLink of quitLinks) {
  quitLink.addEventListener('click', function (event) {
    event.preventDefault();
    openModal('#modal-quit')
  });
}
const loginLinks = document.querySelectorAll('.login-btn');

for (let loginLink of loginLinks) {
  loginLink.addEventListener('click', function (event) {
    event.preventDefault();
    openModal('#modal-login')
  });
}