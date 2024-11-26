document.addEventListener("DOMContentLoaded", () => {
    const learnMoreBtn = document.getElementById('learn-more-btn');
    learnMoreBtn.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
    // Sample project data
    const projects = [
        {
            title: "Project 1",
            description: "This is a web development project focused on creating a responsive design.",
            link: "https://github.com/yourname/project1"
        },
        {
            title: "Project 2",
            description: "This project is a JavaScript application for tracking tasks and productivity.",
            link: "https://github.com/yourname/project2"
        },
        {
            title: "Project 3",
            description: "A complete eCommerce website built with HTML, CSS, and JavaScript.",
            link: "https://github.com/yourname/project3"
        },
        // Add more projects as needed
    ];

    // Load projects dynamically
    const projectsContainer = document.getElementById('projects-list');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectsContainer.appendChild(projectCard);
    });

    // Contact form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you, ${name}, for your message!`);
            form.reset();
        } else {
            alert('Please fill in all the fields.');
        }
    });
});