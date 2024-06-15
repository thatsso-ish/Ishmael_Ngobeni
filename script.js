const skillsInfo = {
    'C++': 'I have experience working with C++, where I developed simple programs and created calculators and user interfaces using Embarcadero. Additionally, I utilized Microsoft Access and SQL for database storage. My skills include creating classes, functions, and working with pointers.',
    'MySQL': "I've gained extensive experience in SQL, utilizing it for data manipulation, sorting, joins, functions, subqueries, as well as creating and merging tables. Additionally, I've worked with PL/SQL for generating reports, interacting with Oracle servers, implementing control structures, explicit cursors, exception handling, and developing procedures and functions. These skills were also applied for data storage purposes.",
    'Python': "I've leveraged Python extensively to develop various machine learning models such as logistic regression, decision trees, and random forests, among others. Python has been instrumental in performing data analysis, cleaning, and manipulation tasks efficiently.",
    'SAS': 'I utilized SAS to automate report generation using SQL commands. Specifically, I employed stream processing as the automation method for production purposes.',
    'Tableau': "I've explored the artistic side of data with Tableau, transforming raw numbers into vibrant visual stories that unveil hidden insights and trends. Through captivating dashboards and interactive elements, I've navigated complex datasets with ease, uncovering valuable patterns and driving informed decision-making.",
    'Excel VBA': "I've harnessed the power of Excel VBA to craft intelligent forms that streamline workflows and minimize manual tasks. One such form automates the process of removing duplicates, ensuring data integrity and accuracy. Additionally, I've developed dynamic dashboards that adapt to real-time changes, providing a visually engaging and insightful overview of key metrics and trends.",
    'Power BI': "I've wielded the magic of Power BI to sculpt data into vivid visual masterpieces, unraveling intricate patterns and illuminating the path to actionable insights. This dynamic tool has empowered me to craft compelling data stories, guiding decision-makers through a journey of discovery and strategic clarity.",
    'R Programming': "I've delved into the realm of R programming, wielding its analytical prowess to meticulously dissect data, cleanse it of imperfections, and extract valuable insights. This versatile tool has enabled me to unravel complex data sets, uncover trends, and facilitate informed decision-making through rigorous analysis and thorough data preparation."
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
