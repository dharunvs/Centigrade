const tl = gsap.timeline({defaults: {ease : 'power1.out'}});

tl.to('.text', {y : "0%", duration : 1, stagger : 0.25});
tl.fromTo('.text', {opacity : 1}, {opacity : 0, duration : 1, stagger : 0.25, delay : 1});
tl.to('.slider', {y : "-100%", duration : 1, delay: 1}, "-=2");
tl.to('.intro', {y : "-100%", duration : 1}, "-=1");
tl.fromTo('nav', {opacity : 0}, {opacity : 1, duration : 1});

let pages = ['landing', 'about', 'team', 'contact', 'shop']
var currentPage = 'landing'
document.getElementById(currentPage).style.fontWeight = 'bold';

pageAnimate = (page) => {

    var distance = 0
    if (page == 'landing'){
        distance = 0;
        currentPage = 'landing';
    };
    if (page == 'about'){
        distance = -100;
        currentPage = 'about';
    };
    if (page == 'team'){
        currentPage = 'team';
        distance = -200;
    };
    if (page == 'contact'){
        currentPage = 'contact';
        distance = -300;
    };
    if (page == 'shop'){
        currentPage = 'shop';
        distance = -400;
    };
    tl.to('.pages', {x : ''+distance+'%', duration : 0.5});

    for (i in pages){
        document.getElementById(pages[i]).style.fontSize = '1rem';
    };
    document.getElementById(currentPage).style.fontSize = '1.4rem';
    document.getElementById(currentPage).style.fontWeight = 'bold';
};
