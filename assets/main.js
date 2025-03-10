const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');

// Navbar actions and all section actions along wiyh cube rotation when navbar is clicked
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list li.active').classList.remove('active') // remove active class from list
        nav.classList.add('active') 

        cube.style.transform = `rotateY(${idx * -90}deg)`; // rotate cube

        document.querySelector('.section.active').classList.remove('active') // remove active class from section
        sections[idx].classList.add('active') // add active class to section

        const array = Array.from(sections)
        const arrSecs = array.slice(1, -1) // only requires indexes 1, 2 and 3 or does not require star and end indexes
        arrSecs.forEach(arrSec => {
            if (arrSec.classList.contains('active')) {
               sections[4].classList.add('action-contact'); 
            }
        });
        if (Selections[0].classList.contains('active')) {
            sections[4].classList.remove('action-contact');
        }
    }); 
});


// Resume section when clicking tab-list
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active') // remove active class from list
        list.classList.add('active')

        document.querySelector('.resume-box.active').classList.remove('active') // remove active class from box
        resumeBoxs[idx].classList.add('active')
    });     
}); 

// portfolio section when clicking tab-list
portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.portfolio-list.active').classList.remove('active') // remove active class from list
        list.classList.add('active')

        document.querySelector('.portfolio-box.active').classList.remove('active') // remove active class from box
        portfolioBoxs[idx].classList.add('active')
    }); 
})



// visibility for contact section when reloading (cube reloadong animation)
setTimeout(() => {
    sections[4].classList.remove('active');
}, 1500);



function openModal() {
    document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}