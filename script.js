// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').slice(1); // Get section ID
      const targetElement = document.getElementById(targetId);

      // Scroll to the target section
      window.scrollTo({
          top: targetElement.offsetTop - 50, // Offset for header height
          behavior: 'smooth',
      });
  });
});

// Highlight Active Navigation Link Based on Scroll Position
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
      const sectionTop = section.offsetTop - 60; // Offset for header height
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
      }
  });

  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === currentSection) {
          link.classList.add('active');
      }
  });
});


// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";



  const firebaseConfig = {
    apiKey: "AIzaSyCAs9uTR3nKoBSUhQ7Q8UAdzU25ozWKwcA",
    authDomain: "seafoodsp6.firebaseapp.com",
    projectId: "seafoodsp6",
    storageBucket: "seafoodsp6.firebasestorage.app",
    databaseURL: "https://seafoodsp6-default-rtdb.firebaseio.com/",
    messagingSenderId: "583628608965",
    appId: "1:583628608965:web:553c531bfb671661bc67ac"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login functionality with form validation
document.getElementById("login-form").addEventListener("click", (event) => {
    event.preventDefault();
  
    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Form validation
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }
  
    // Proceed with Firebase authentication if validation passes
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        window.location.href = "dashboard.html"; // Replace with the target page URL
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Error: " + errorMessage);
      });
  });
  

  
