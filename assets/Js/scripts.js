// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle intro animation
    const introAnimation = document.getElementById('intro-animation');
    const mainContent = document.getElementById('main-content');
    
    if (introAnimation && mainContent) {
        // Hide main content initially
        mainContent.style.display = 'none';
        
        // After 3 seconds, fade out the animation and show the content
        setTimeout(() => {
            introAnimation.style.opacity = '0';
            
            // After animation fades out, remove it and show content
            setTimeout(() => {
                introAnimation.style.display = 'none';
                mainContent.style.display = 'block';
                
                // Add a small fade-in effect for the main content
                setTimeout(() => {
                    mainContent.style.opacity = '1';
                }, 50);
            }, 1000);
        }, 3000);
    }
    
    // Theme toggle functionality
    const themeButton = document.getElementById('theme-button');
    
    if (themeButton) {
        themeButton.addEventListener('click', function() {
            const body = document.body;
            
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            }
        });
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme === 'light') {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    }
    
    // Login/Register tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Hide all tab content
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.add('hidden');
                });
                
                // Show the selected tab content
                const tabId = this.getAttribute('data-tab') + '-tab';
                document.getElementById(tabId).classList.remove('hidden');
            });
        });
    }
    
    // Login form handling
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const loginMessage = document.getElementById('login-message');
            
            // Simple validation
            if (!email || !password) {
                loginMessage.textContent = 'Please fill in all required fields.';
                loginMessage.className = 'form-message error';
                return;
            }
            
            // In a real application, you would send this data to a server for authentication
            // For this demo, we'll just show a success message
            loginMessage.textContent = 'Login successful! Redirecting to your dashboard...';
            loginMessage.className = 'form-message success';
            
            // Simulate redirect after successful login
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 2000);
        });
    }
    
    // Register form handling
    const registerForm = document.getElementById('register-form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const phone = document.getElementById('register-phone').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            const registerMessage = document.getElementById('register-message');
            
            // Simple validation
            if (!name || !email || !phone || !password || !confirmPassword) {
                registerMessage.textContent = 'Please fill in all required fields.';
                registerMessage.className = 'form-message error';
                return;
            }
            
            if (password !== confirmPassword) {
                registerMessage.textContent = 'Passwords do not match.';
                registerMessage.className = 'form-message error';
                return;
            }
            
            // In a real application, you would send this data to a server for registration
            // For this demo, we'll just show a success message
            registerMessage.textContent = 'Registration successful! You can now log in.';
            registerMessage.className = 'form-message success';
            
            // Reset the form
            registerForm.reset();
            
            // Switch to login tab after successful registration
            setTimeout(() => {
                document.querySelector('[data-tab="login"]').click();
            }, 2000);
        });
    }
    
    // Appointment form handling
    const appointmentForm = document.getElementById('appointment-form');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const fullName = document.getElementById('full-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const practiceArea = document.getElementById('practice-area').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            
            // Simple validation
            if (!fullName || !email || !phone || !practiceArea || !date || !time) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show a success message
            alert('Thank you! Your appointment request has been submitted. We will contact you shortly to confirm.');
            
            // Reset the form
            appointmentForm.reset();
        });
    }
    
    // Newsletter form handling
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            
            if (!emailInput.value) {
                alert('Please enter your email address.');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show a success message
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset the form
            newsletterForm.reset();
        });
    }
    
    // News category filtering
    const categoryLinks = document.querySelectorAll('.category-link');
    
    if (categoryLinks.length > 0) {
        categoryLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all category links
                categoryLinks.forEach(catLink => catLink.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                const newsArticles = document.querySelectorAll('.news-article');
                
                newsArticles.forEach(article => {
                    if (category === 'all' || article.getAttribute('data-category') === category) {
                        article.style.display = 'block';
                    } else {
                        article.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // News search functionality
    const searchBtn = document.getElementById('search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchInput = document.getElementById('news-search').value.toLowerCase();
            const newsArticles = document.querySelectorAll('.news-article');
            
            if (!searchInput) {
                newsArticles.forEach(article => {
                    article.style.display = 'block';
                });
                return;
            }
            
            newsArticles.forEach(article => {
                const title = article.querySelector('h3').textContent.toLowerCase();
                const content = article.querySelector('.article-content').textContent.toLowerCase();
                
                if (title.includes(searchInput) || content.includes(searchInput)) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature, .testimonial, .area, .news-item, .info-box');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    document.querySelectorAll('.feature, .testimonial, .area, .news-item, .info-box').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Backend support simulation
    console.log('Backend services initialized');
    console.log('Connected to appointment booking system');
    console.log('User authentication services ready');
    console.log('Newsletter subscription service active');
});