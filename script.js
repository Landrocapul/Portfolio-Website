
    
    
    


  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const sidebar = document.getElementById("sidebar");

    burger.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  });


    
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
  const aboutSection = document.querySelector(".about-section");
  const projectSection = document.querySelector(".project-section"); 
  const contactSection = document.querySelector(".contact-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // When projects section is visible -> change about section bg
        aboutSection.style.backgroundColor = "#252525";
        projectSection.style.backgroundColor = "#252525";
        contactSection.style.backgroundColor = "#252525";
      } else {
        // When projects not visible -> back to red
        aboutSection.style.backgroundColor = "#cb2121";
        projectSection.style.backgroundColor = "#cb2121";
        contactSection.style.backgroundColor = "#cb2121";
      }
    });
  }, { threshold: 0.2 });

  observer.observe(projectSection);
});




