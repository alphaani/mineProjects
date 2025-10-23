🌐 Hami Mini Market Website Functions (app_functions.js)

This document explains the core front-end interactivity provided by the JavaScript file app_functions.js. This script is responsible for improving user experience on the website, particularly for mobile users and when submitting the contact form.

1. Responsive Navigation (Mobile Menu Toggle)

This feature is critical for Mobile-First Design, ensuring the primary navigation links are easily accessible on smaller screens.

Element

ID Used

Description

Menu Icon

menu-icon

The clickable icon (often a hamburger icon) that triggers the menu.

Navigation Menu

nav-menu

The container holding the main navigation links.

How it Works:

Toggle Action: When a user clicks the Menu Icon, the JavaScript uses the classList.toggle('active') method on the Navigation Menu element.

CSS Trigger: Your CSS code (@media queries) then checks for the presence of the active class to apply the necessary styles (e.g., changing display: none to display: flex and moving the menu into view).

Auto-Close: For convenience, clicking any link inside the open menu automatically removes the active class, closing the menu.

Crucial CSS Requirement:

For the menu to visibly appear and disappear, your CSS must specifically target the active class within a media query (for mobile sizes).

@media (max-width: 768px) {
    /* DEFAULT STATE: Hides the menu when the screen is small */
    #nav-menu {
        display: none; 
        /* Ensure it's hidden out of view when not active */
        opacity: 0;
    }
    
    /* ACTIVE STATE: Shows the menu when the JavaScript adds the 'active' class */
    #nav-menu.active {
        display: flex;
        flex-direction: column;
        position: fixed; /* Keep it stationary on the screen */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9); /* Dark overlay */
        opacity: 1;
        transition: opacity 0.3s ease; /* Smooth transition */
        z-index: 1000; /* Ensures it's above all other content */
    }
}


2. Contact Form Validation

This function prevents the submission of incomplete or incorrectly formatted data, providing immediate feedback to the user and improving data quality.

Validation Rules and Error Handling:

Field

Rule

Error Message Trigger

Full Name (fullname)

Must be at least 3 characters long.

"Magaca oo dhammaystiran waa inuu ka yaraa 3 xaraf."

Email (email)

Must be filled and match the standard email format (e.g., user@example.com).

"Fadlan geli cinwaan email sax ah."

Message (message)

Must be at least 10 characters long.

"Fariinta waa inay ka koobnaataa ugu yaraan 10 xaraf."

Form Process Flow:

Stop Default: The script immediately calls event.preventDefault() to stop the browser from performing a quick, unvalidated submission.

Check Rules: It checks all inputs against the defined rules. If an input fails, it gets a red border (2px solid #ff4d1e).

Display Errors: All validation failures are collected and displayed in the message area (form-message) in Red.

Success State: If no errors are found:

A green success message is displayed.

The form fields are cleared.

The success message disappears after 5 seconds (setTimeout).
