// XAQIIJINTA FOOMKA IYO SHAQADA MENU-GA (ISKU DARAN)

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------
    // 1. HELIDDA DHAMMAAN ELEMENTS-KA (Global scope)
    // ----------------------------------------------
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');

    // Contact Form Elements
    const submitButton = document.getElementById('submit');
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formMessage = document.getElementById('form-message');

    // ----------------------------------------------
    // 2. SHAQADA NAV MENU-GA (MENU TOGGLE)
    // ----------------------------------------------
    
    // Furidda/xiridda menu-ga marka icon-ka la riixo
    if (menuIcon && navMenu) {
        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Xiridda menu-ga marka linkiga la riixo
    if (navMenu) {
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }


    // ----------------------------------------------
    // 3. SHAQADA FOOMKA XAQIIJINTA (FORM VALIDATION)
    // ----------------------------------------------

    // Function-ka guud ee muujinaya fariinta
    const displayMessage = (msg, isSuccess = true) => {
        if (formMessage) {
            formMessage.textContent = msg;
            // Isticmaal midabyada hore loo sheegay: cagaar guul, casaan khalad
            formMessage.style.color = isSuccess ? '#96d906' : '#ff4d1e'; 
        }
    };

    // Function-ka xaqiijinaya format-ka email-ka
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Dhagaysiga badhanka gudbinta (haddii uu jiro)
    if (submitButton && fullnameInput && emailInput && messageInput) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault(); // Jooji gudbinta foomka caadiga ah

            const fullname = fullnameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            let errors = [];

            // Reset border style
            fullnameInput.style.border = '1px solid #ddd';
            emailInput.style.border = '1px solid #ddd';
            messageInput.style.border = '1px solid #ddd';


            // Xaqiijinta Magaca Buuxa (ugu yaraan 3 xaraf)
            if (fullname.length < 3) {
                errors.push('Magaca oo dhammaystiran waa inuu ka yaraa 3 xaraf.');
                fullnameInput.style.border = '2px solid #ff4d1e';
            }

            // Xaqiijinta Email-ka (waa inuu buuxsanaadaa oo uu sax yahay qaab ahaan)
            if (!email) {
                errors.push('Fadlan geli cinwaanka emailka.');
                emailInput.style.border = '2px solid #ff4d1e';
            } else if (!isValidEmail(email)) {
                errors.push('Fadlan geli cinwaan email sax ah.');
                emailInput.style.border = '2px solid #ff4d1e';
            }

            // Xaqiijinta Fariinta (ugu yaraan 10 xaraf)
            if (message.length < 10) {
                errors.push('Fariinta waa inay ka koobnaataa ugu yaraan 10 xaraf.');
                messageInput.style.border = '2px solid #ff4d1e';
            }


            // 4. Hubi in khaladaad jiraan
            if (errors.length > 0) {
                // Muuji dhammaan khaladaadka
                displayMessage(errors.join(' | '), false);
            } else {
                // 5. Gudbinta guusha
                displayMessage('Mahadsanid! Fariintaada si guul leh ayaa loo gudbiyay. (Xogta laguma dirin server-ka)', true);

                // Nadiifi foomka
                fullnameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';

                // Nadiifi fariinta ka dib 5 ilbiriqsi
                setTimeout(() => {
                    if (formMessage) formMessage.textContent = '';
                }, 5000);
            }
        });
    }
});