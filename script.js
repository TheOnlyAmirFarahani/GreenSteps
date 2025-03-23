document.addEventListener('DOMContentLoaded', () => {
    

    const navLinks = document.querySelectorAll('.nav-ink');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#4CAF50';
            link.style.color = '#fff';
        });
        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '';
            link.style.color = '#fff';
        });
    });

    const footer = document.querySelector('.main-footer') || document.getElementById('main-footer');
    if (footer) {
        setTimeout(() => {
            const dynamicMsg = document.createElement('p');
            dynamicMsg.textContent = '🌱 Together, we can make a difference!';
            footer.appendChild(dynamicMsg);
        }, 2000);
    }

    if (document.title.includes('Home Page')) {

        setTimeout(() => {
            const newBenefit = document.createElement('li');
            newBenefit.className = 'benefit-item';
            newBenefit.textContent = 'Community Challenges: Participate in eco-challenges with friends and family.';
            const benefitsList = document.querySelector('.benefits-list');
            benefitsList.appendChild(newBenefit);
        }, 3000);

        const ctaSection = document.getElementById('call-to-action');
        ctaSection.addEventListener('click', () => {
            document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (document.title.includes('About GreenSteps')) {

        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.addEventListener('click', () => {
                sections.forEach(sec => sec.style.backgroundColor = '');
                section.style.backgroundColor = '#e8f5e9';
            });
        });

        const joinSection = document.getElementById('join-us-section');
        const quote = document.createElement('p');
        quote.className = 'section-text';
        quote.textContent = '"The journey of a thousand miles begins with a single step." – Lao Tzu';
        joinSection.appendChild(quote);
    }

    if (document.title.includes('Global Warming Issues')) {

        const images = document.querySelectorAll('.image-container img');
        images.forEach(image => {
            image.style.cursor = 'pointer';
            image.addEventListener('click', () => {
                window.open(image.src, '_blank');
            });
        });

        const sourceItems = document.querySelectorAll('.source-item');
        let index = 0;
        setInterval(() => {
            sourceItems.forEach(item => item.style.backgroundColor = '');
            sourceItems[index].style.backgroundColor = '#e8f5e9';
            index = (index + 1) % sourceItems.length;
        }, 2000);
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const errorMsg = document.getElementById('error-message');

            let errors = [];

            if (name === '') errors.push('Name is required.');
            if (!/^\S+@\S+\.\S+$/.test(email)) errors.push('Valid email is required.');
            if (message.length < 10) errors.push('Message must be at least 10 characters.');

            if (errors.length > 0) {
                errorMsg.textContent = errors.join(' ');
                errorMsg.style.color = 'red';
            } else {
                errorMsg.textContent = '';
                alert('Form submitted successfully!');
                contactForm.reset();
            }
        });
    }

});
