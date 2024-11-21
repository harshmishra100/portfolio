// scripts.js - Smooth Scrolling and Typing Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Effect for Introduction
const text = "Hi, I'm Harsh Mishra, a passionate Data Science and AI enthusiast.";
let i = 0;
let speed = 100;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-effect").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter; // Start typing effect when the page loads
