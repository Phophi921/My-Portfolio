// ========== script.js ==========

// Smooth scroll function for navigation buttons
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Download CV functionality ---
    const downloadBtn = document.getElementById('download-cv');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Create a dummy CV text file
            const cvContent = `PHOPHI MALISE
Email: phophimalise060@gmail.com | Phone: 072 527 0033
Location: Centurion, Gauteng, South Africa

PROFILE
Passionate IT graduate majoring in Software Development from Vaal University of Technology. Equipped with strong coding and problem-solving skills.

EDUCATION
Advanced Diploma in Information Technology (Cum Laude) - Vaal University of Technology (2025)
National Diploma: Information Technology - Vaal University of Technology (2022-2024)
Mbilwi Secondary School (2016-2020)

SKILLS
Technical: MS Office, Networking, Programming, SQL, JavaScript, Python, Java, HTML
Soft Skills: Communication, Problem Solving, Analytical Thinking, Teamwork, Leadership, Attention to Detail, Time Management, Adaptability
Languages: English, Tshivenda

CERTIFICATES
CCNA, Agile Project Management, IT Essentials, Artificial Intelligence, Cloud Architecture, Probability & Statistics

PROJECTS
- VUT iEnabler UX Redesign (2025)
- Gym Wear Chatbot (2025)
- AI Solution for Hospitality (2024)
- Functional Membership Website (2024)
- SA Youth Council Platform (2025)`;
            
            const blob = new Blob([cvContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Phophi_Malise_CV.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }
    
    // --- Contact form submission (opens mailto) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.name.value.trim();
            const email = this.email.value.trim();
            const message = this.message.value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Construct mailto link
            const subject = `Message from ${name} (${email})`;
            const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
            const mailtoLink = `mailto:phophimalise060@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            
            // Open default email client
            window.location.href = mailtoLink;
            
            // Optionally reset form
            this.reset();
        });
    }
    
    // --- Interactive image placeholders (now with actual images, but keep click effect optional) ---
    const imageContainers = document.querySelectorAll('.image-placeholder, .hero-pic, .single-pic-frame');
    
    imageContainers.forEach(container => {
        container.addEventListener('click', function(e) {
            // Don't trigger if clicking on a link inside
            if (e.target.tagName === 'A' || e.target.closest('a')) return;
            
            // Visual feedback
            this.style.opacity = '0.7';
            setTimeout(() => this.style.opacity = '1', 200);
            
            console.log('Image container clicked');
        });
    });
    
    // --- Project cards subtle click effect ---
    const projectCards = document.querySelectorAll('.card');
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' || e.target.closest('a') || e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
            
            this.style.backgroundColor = '#1f1f1f';
            setTimeout(() => this.style.backgroundColor = '', 150);
            
            const title = this.querySelector('h3') ? this.querySelector('h3').innerText : 'project';
            console.log(`Project clicked: ${title}`);
        });
    });
    
    // --- External links open safely (for all anchor tags) ---
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
    
    console.log('Portfolio ready — CV download, contact form, smooth scroll active.');
});

// Expose function globally for onclick attributes
window.scrollToSection = scrollToSection;