//Анимации

window.onload = () => document.querySelector('header').classList.remove('hidden');

$(window).on("load", function() {
    $(window).scroll(function() {
        const windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".event").each(function() {
            const objectBottom = $(this).offset().top + $(this).outerHeight();

            if (objectBottom < windowBottom) {
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else { 
                if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            }
        });
    }).scroll(); 
});


const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up");
if (elementsToFadeInUpOnScroll) {
    window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
    if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
    } else {
        element.classList.remove("fade-in-up");
    }
        });
    });
} 