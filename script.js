const skillsInfo = {
    'C++': 'C++ is a powerful general-purpose programming language. It can be used to create small programs or large applications. C++ allows procedural programming for intensive functions of CPU and to provide control over hardware.',
    'MySQL': 'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.',
    'Python': 'Python is an interpreted, high-level and general-purpose programming language. Python\'s design philosophy emphasizes code readability with its notable use of significant indentation.',
    'SAS': 'SAS (Statistical Analysis System) is a software suite developed by SAS Institute for advanced analytics, multivariate analysis, business intelligence, data management, and predictive analytics.',
    'Tableau': 'Tableau is a visual analytics platform transforming the way we use data to solve problems. Explore with limitless visual analytics, build dashboards and perform ad hoc analyses in just a few clicks.',
    'Excel VBA': 'Excel VBA (Visual Basic for Applications) is the programming language of Excel and other Office programs. With Excel VBA you can automate tasks in Excel by writing so-called macros.',
    'Power BI': 'Power BI is a business analytics service by Microsoft. It aims to provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.',
    'R Programming': 'R is a programming language and free software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing. The R language is widely used among statisticians and data miners.'
};

function showSkillInfo(skill) {
    const modal = document.getElementById('skill-info-modal');
    const infoText = document.getElementById('skill-info-text');
    infoText.textContent = skillsInfo[skill];
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('skill-info-modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('skill-info-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Define the skills data
const skillsData = [
    { name: 'C++', image: 'images/cplusplus.jpeg', caption: 'Programming and Graphic User Interface Design' },
    { name: 'MySQL', image: 'images/mysql.jpg', caption: 'Database Analysis, Manipulation and Implementation' },
    { name: 'Python', image: 'images/python.png', caption: 'Machine Learning Modelling and Data Analysis' },
    { name: 'SAS', image: 'images/sas.jpeg', caption: 'Data Extraction and Report Generation' },
    { name: 'Tableau', image: 'images/tableau.png', caption: 'Dynamic Dashboard Design' },
    { name: 'Excel VBA', image: 'images/excel.jpeg', caption: 'Master Data Management' },
    { name: 'Power BI', image: 'images/powerbi.jpeg', caption: 'Dynamic Dashboard Design' },
    { name: 'R Programming', image: 'images/r.jpeg', caption: 'Data Analysis' }
];

// Function to populate skills
function populateSkills() {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';

    skillsData.forEach(skill => {
        const listItem = document.createElement('li');
        const image = document.createElement('img');
        const caption = document.createElement('span');

        image.src = skill.image;
        image.alt = skill.name;
        caption.textContent = skill.caption;

        listItem.appendChild(image);
        listItem.appendChild(caption);
        skillsList.appendChild(listItem);
    });
}

// Function to handle scrolling
function scrollSkills(direction) {
    const skillsContainer = document.getElementById('skills-container');
    const scrollAmount = 200; // Adjust as needed

    if (direction === 'left') {
        skillsContainer.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        skillsContainer.scrollLeft += scrollAmount;
    }
}

// Function to handle scrolling left
document.getElementById('scroll-left').addEventListener('click', () => {
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.scrollLeft -= 200; // Adjust scroll amount as needed
});

// Function to handle scrolling right
document.getElementById('scroll-right').addEventListener('click', () => {
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.scrollLeft += 200; // Adjust scroll amount as needed
});

// Call the populateSkills function to initially populate the skills
populateSkills();
