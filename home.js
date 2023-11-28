document.getElementById('facultyBtn').addEventListener('click', function () {
    window.location.href = 'faculty.html';
});

document.getElementById('eventsBtn').addEventListener('click', function () {
    window.location.href = 'event.html';
});

document.getElementById('coursesBtn').addEventListener('click', function () {
    window.location.href = 'courses.html';
});


const footer = document.querySelector('footer');
const slideTrigger = window.innerHeight * (2 / 3);

function updateFooterStyle() {
    if (window.scrollY > slideTrigger) {
        footer.classList.add('slide-up');
    } else {
        footer.classList.remove('slide-up');
    }
}

window.addEventListener('scroll', updateFooterStyle);

updateFooterStyle();

