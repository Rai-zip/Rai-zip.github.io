const hamburger = document.querySelector('.hamburger');
        const navUl = document.querySelector('.navdiv-ul');

        // Add a click event listener to the hamburger icon
        hamburger.addEventListener('click', function () {
            // Toggle the 'active' class on the hamburger
            hamburger.classList.toggle('active');

            // Toggle the 'active' class on the navigation ul
            navUl.classList.toggle('active');

            // Add or remove the 'navdiv-ul-hidden' class to control visibility
            navUl.classList.toggle('navdiv-ul-hidden');
            
        });