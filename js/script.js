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