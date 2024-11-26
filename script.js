document.addEventListener("DOMContentLoaded", () => {
    const learnMoreBtn = document.getElementById('learn-more-btn');
    learnMoreBtn.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
    // Sample project data
    const projects = [
        {
            title: "LoginPage",
            description: "This project focuses on creating a responsive and user-friendly login page that utilizes modern design and best practices. The purpose of this login page is to provide a secure and seamless authentication interface for users. It uses minimalist and stylish layouts that work efficiently on both mobile and desktop platforms.",
            link: "https://nitish9570.github.io/login-page/"
        },
        {
            title: "Project 2",
            description: "This project is designed to create a fully functional digital clock using HTML, CSS, and JavaScript. The clock displays the current time in hours, minutes, and seconds, and updates in real-time. The design is simple, clean, and user-friendly, making it suitable for both websites and mobile applications. Additionally, the project can be customized to include features like a date display, time zone adjustments, and an alarm feature.",
            link: "https://nitish9570.github.io/clock/"
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