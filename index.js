const menuIcon = document.getElementById('menu-icon');
const introSection = document.getElementById('intro');
const links = document.querySelectorAll('.nav-link');
let navDisplay = 'none';

const projects = [
    {
        title: "Personal Portfolio",
        description: "Did while working on Freecodecamp's ceritification on Responsive web design. Hardcoded HTML, CSS and vanilla JS",
        source: "https://github.com/Lucky-Tsuma/Portfolio_Site",
        project: "https://portfolio-lucky.netlify.app/",
        image: "/assets/portfolio.png"
    },
    {
        title: "Product Landing Page",
        description: "Did while working on Freecodecamp's ceritification on Responsive web design. Hardcoded HTML, CSS and vanilla JS",
        source: "https://github.com/Lucky-Tsuma/Product_Page",
        project: "https://kavih-lucky.netlify.app/",
        image: "/assets/product.png"
    },
    {
        title: "Survey Form",
        description: "Did while working on Freecodecamp's ceritification on Responsive web design. Hardcoded HTML and CSS.",
        source: "https://github.com/Lucky-Tsuma/Survey_Form",
        project: "https://survey-form-lucky.netlify.app/",
        image: "/assets/survey.png"
    },
    {
        title: "Technical Documentation Page",
        description: "Did while working on Freecodecamp's ceritification on Responsive web design. Hardcoded HTML and CSS.",
        source: "https://github.com/Lucky-Tsuma/Documentation_Page",
        project: "https://git-doc-lucky.netlify.app/",
        image: "/assets/documentation.png"
    },
    {
        title: "Tribute Page",
        description: "Did while working on Freecodecamp's ceritification on Responsive web design. Hardcoded HTML and CSS.",
        source: "https://github.com/Lucky-Tsuma/Tribute_Page",
        project: "https://tribute-page-lucky.netlify.app/",
        image: "/assets/tribute.png"
    },
];
const divProjects = document.getElementsByClassName("project-tile")[0];

const certifications = [
    {
        title: "JavaScript Algorithms and Data Structures",
        link: "https://www.freecodecamp.org/certification/lucky-tsuma/javascript-algorithms-and-data-structures"
    }, 
    {
        title: "Responsive Web Design",
        link: "https://www.freecodecamp.org/certification/lucky-tsuma/responsive-web-design"
    }
];
const divCertifications = document.getElementById('certifications');



// toogle navigation bar
menuIcon.onclick = () => {
    if (navDisplay === 'none') {
        document.querySelector('#nav-links').style.display = 'flex';
        navDisplay = 'flex';
        introSection.style.marginTop = '150px';
    } else {
        document.querySelector('#nav-links').style.display = "none";
        navDisplay = 'none';
        introSection.style.marginTop = '0px';
    }
}

window.addEventListener('resize', function(){
    if(this.window.innerWidth > 904) {
        document.querySelector('#nav-links').style.display = 'flex';
        navDisplay = 'flex';
        introSection.style.marginTop = '0px';
    } else {
        document.querySelector('#nav-links').style.display = 'none';
        navDisplay = 'none';
    }
});

for(const link of links) {
  link.addEventListener('click', function(){
    if(window.innerWidth < 720) {
        document.querySelector('#nav-links').style.display = "none";
        introSection.style.marginTop = '0px';
        navDisplay = 'none';
    }
  });
}

// Projects section
projects.map(item => {
    divProjects.innerHTML += `<div id="project">
                    <div id="project-img" style="background-image: url(${item.image})">
                        <div class="modal">
                            <p class="project-title heading">${item.title}</p>
                            <p>${item.description}</p>
                        </div>
                    </div>
                    <div class="project-buttons">
                        <a href="${item.source}" target="_blank">
                            <button id="view-code">See code <em class="fab fa-github"></em></button>
                        </a>
                        <a href="${item.project}" target="_blank">
                            <button id="view-project">See project <em class="fas fa-project-diagram"></em></button>
                        </a>
                    </div>
                </div>`
});


// Certifications section
certifications.map(item => {
    divCertifications.innerHTML += `<div class="cert">
                        ${item.title}
                        <p id="freecodecamp"><i class="fa-brands fa-free-code-camp"></i> freeCodeCamp</p>
                        <a href="${item.link}" target="_blank"><button class="btn-credential">Show credential</button></a>
                    </div>`
});
