document.addEventListener('DOMContentLoaded', () => {
    // Three-Dot Menu Functionality
    const threeDotBtn = document.getElementById('threeDotBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (threeDotBtn && dropdownMenu) {
        threeDotBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdownMenu.classList.toggle('active');
            threeDotBtn.setAttribute('aria-expanded', isOpen);
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdownMenu.contains(e.target) && !threeDotBtn.contains(e.target)) {
                dropdownMenu.classList.remove('active');
                threeDotBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close dropdown when clicking a menu link
        dropdownMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                dropdownMenu.classList.remove('active');
                threeDotBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && dropdownMenu.classList.contains('active')) {
                dropdownMenu.classList.remove('active');
                threeDotBtn.setAttribute('aria-expanded', 'false');
                threeDotBtn.focus();
            }
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const feedback = document.getElementById('formFeedback');
            
            let isValid = true;

            // Validate Name
            if (!nameInput.value.trim()) {
                nameInput.classList.add('error');
                isValid = false;
            } else {
                nameInput.classList.remove('error');
            }

            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
                emailInput.classList.add('error');
                isValid = false;
            } else {
                emailInput.classList.remove('error');
            }

            // Validate Message
            if (!messageInput.value.trim()) {
                messageInput.classList.add('error');
                isValid = false;
            } else {
                messageInput.classList.remove('error');
            }

            if (isValid) {
                feedback.style.color = '#006644';
                feedback.textContent = 'Thank you! Your message has been prepared successfully (Form simulation mode).';
                contactForm.reset();
                setTimeout(() => {
                    feedback.textContent = '';
                }, 5000);
            } else {
                feedback.style.color = '#de350b';
                feedback.textContent = 'Please correct the highlighted fields above.';
            }
        });
    }
});