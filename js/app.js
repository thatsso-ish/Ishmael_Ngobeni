

//navbar 

let sidenav = document.querySelector('.sideIcon');
let sideMenu = document.querySelector('.sideBar');
let closeSide = document.querySelector('.close');
let links = document.querySelectorAll('.sideBar a');
let cvBtn = document.querySelector('.cv');




sidenav.addEventListener("click", () => {

    sideMenu.style.display = 'block';

});

closeSide.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})
for (let link of links) {
    link.addEventListener('click', () => {
        sideMenu.style.display = 'none';
    })
}

//functionality

let about = document.querySelector('.aboutBtn');
let aboutP = document.querySelector('.about-content p');
about.addEventListener('click', () => {

    aboutP.style.maxWidth= '1000px';
    aboutP.style.margin= '2rem 0 3rem';
    aboutP.style.fontSize=' 1.6rem';
    if (about.classList.toggle('aboutBtn')) {
        aboutP.innerText = '';
        aboutP.innerText = `As a holder of a National Diploma in Software Development from Tshwane University of Technology, I've developed a strong foundation in software development principles, algorithms, and data structures. My passion for innovation and continuous learning drives me to stay ahead of the curve in cutting-edge technologies and industry advancements.`;
                
        about.style.textAline = 'centre';
        about.innerText = 'read more';
        let status2 = about.classList.toggle('aboutBtn');



    }
    else {
        aboutP.innerText = `As a holder of a National Diploma in Software Development from Tshwane University of Technology, I've developed a strong foundation in software development principles, algorithms, and data structures. My passion for innovation and continuous learning drives me to stay ahead of the curve in cutting-edge technologies and industry advancements. I excel at the intersection of Data Analytics, Software Development, Business Intelligence, and Data Science, where I can analyze complex data, code innovative solutions, and drive valuable insights. Through my experience in hackathons, I've demonstrated my programming skills, critical thinking abilities, and teamwork capabilities.`;
        about.innerText = 'read less'
        let status = about.classList.toggle('aboutBtn');


    }


    about.classList.toggle('aboutBtn');

})

