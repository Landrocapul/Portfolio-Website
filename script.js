
    
    let lastScrollTop = 0; // Variable to hold the last scroll position

        function toggleMenu() {
            document.getElementById("sidebar").classList.toggle("active");
        }

        window.onscroll = function() {
            const navbar = document.getElementById("navbar");
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            // Check if the user is scrolling down or up
            if (currentScroll > lastScrollTop && currentScroll > 50) {
                // User is scrolling down and has scrolled more than 50 pixels
                navbar.classList.remove("scrolled"); // Hide the navbar
            } else {
                // User is scrolling up
                navbar.classList.add("scrolled"); // Show the navbar
            }

            // Update the last scroll position to the current position
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
        };
    


    
    const texts = document.querySelectorAll('.about-text, .about-text2');

        texts.forEach(el => {
        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                // apply variable only to this element
                el.style.setProperty('--scrollY', "0%");
                } else {
                el.style.setProperty('--scrollY', "100%");
                }
            });
            },
            { threshold: 1 } // 20% visible
        );

        observer.observe(el);
        });

  
    

    const text = document.querySelector('.about-text3');

        window.addEventListener('scroll', () => {
            const textTop = text.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.6;
            const triggerTop = window.innerHeight * 0.2;

            if (textTop < triggerBottom && textTop > triggerTop) {
            text.classList.add('show');   // fade in when visible
            } else {
            text.classList.remove('show'); // fade out when out of view
            }
        });
    const text2 = document.querySelector('.textproject h1');

        window.addEventListener('scroll', () => {
            const textTop = text2.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.8;
            const triggerTop = window.innerHeight * 0.1;

            if (textTop < triggerBottom && textTop > triggerTop) {
            text2.classList.add('show');   // fade in when visible
            } else {
            text2.classList.remove('show'); // fade out when out of view
            }
        });



    
 
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  const triggerHeight = window.innerHeight * 0.6;

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();

    if (rect.top < triggerHeight) {
      card.style.transform = "scale(1)";
      card.style.zIndex = 10 + index;
    } else {
      card.style.transform = "scale(0.6)";
      card.style.zIndex = index;
    }
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about");
  const projectSection = document.querySelector(".project-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // When projects section is visible -> change about section bg
        aboutSection.style.backgroundColor = "#131313ff";
        projectSection.style.backgroundColor = "#131313ff";
      } else {
        // When projects not visible -> back to red
        aboutSection.style.backgroundColor = "#cb2121";
        projectSection.style.backgroundColor = "#cb2121";
      }
    });
  }, { threshold: 0.2 });

  observer.observe(projectSection);
});




