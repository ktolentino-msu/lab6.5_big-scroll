// Dear Jeff,
// When you say that this assignment requires 'unique' options,
// I was unsure of if each image has to be different...
// In real life, I'd design it to be much more cohesive
// But I thought for this I'd play around with different options

ScrollReveal().reveal('.photo1', {
    duration: 200, 
    scale: .9
    }
);

ScrollReveal().reveal('.photo2', {
    delay: 100, 
    scale: .8
    }
);

ScrollReveal().reveal('.photo3', {
    opacity: .3, 
    duration: 1000, 
    delay: 200, 
    scale:.8, 
    easing: 'cubic-bezier(0, 0, 1, 1)'
    }
);

ScrollReveal().reveal('.photo4', {
    opacity: .2, 
    duration: 1000, 
    delay: 400, 
    scale: .8, 
    easing: 'cubic-bezier(.5, 0, 1, 1)',
    rotate: {
        x: 20,
        y: 20
    }
    }
);

ScrollReveal().reveal('.photo5', {
    opacity: .1, 
    duration: 1000, 
    delay: 600, 
    scale: .8, 
    easing: 'cubic-bezier(.2, 0, 1, 1)',
    rotate: {
        x: -20,
        y: -20
    }
    }
);