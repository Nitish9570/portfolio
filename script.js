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
            title: "clock",
            description: "This project is designed to create a fully functional digital clock using HTML, CSS, and JavaScript. The clock displays the current time in hours, minutes, and seconds, and updates in real-time. The design is simple, clean, and user-friendly, making it suitable for both websites and mobile applications. Additionally, the project can be customized to include features like a date display, time zone adjustments, and an alarm feature.",
            link: "https://nitish9570.github.io/clock/"
        },
        {
            title: "snake game",
            description: "The Snake game built with HTML, CSS, and JavaScript is a classic arcade-style game where the player controls a snake that moves around the screen to collect food, causing it to grow longer. The goal is to avoid colliding with the walls or the snake’s own body while trying to eat as much food as possible to score points. The game utilizes HTML for the structure, CSS for styling and layout, and JavaScript for handling the game logic, including snake movement, collision detection, and score tracking.",
            link: "https://nitish9570.github.io/snake-game/"
        },

         {
            title: "instagram-clone",
            description: "An Instagram clone is a social media app designed to mimic the core features of Instagram, allowing users to share photos, videos, and stories. It includes functionalities such as user profiles, a feed for posts, like and comment features, and direct messaging. Users can follow others, explore new content through hashtags or trending pages, and post their own media with filters, captions, and tags. The app focuses on user interaction and community building, offering a platform for both casual sharing and professional branding. The design and user experience are streamlined to provide a simple, engaging, and visually appealing interface.",
            link: "https://nitish9570.github.io/Instagram-Clone/"
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
