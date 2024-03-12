let text = document.getElementById('text-in-middle'); 
            window.addEventListener('scroll',function(){
                let value = window.scrollY; 
                text.style.transform = 'translateY(' + value * 0.5 + 'px)'; 
            })
    
            document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener("scroll", function() {
          var heading = document.querySelector(".content h1");
          var triggerScroll = 600; 
      
          if (window.scrollY > triggerScroll) {
            heading.classList.add("fade-out");
          } else {
            heading.classList.remove("fade-out");
          }
        });
    });

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