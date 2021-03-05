const tl = gsap.timeline({defaults: {ease : 'power1.out'}});

        tl.to('.text', {y : "0%", duration : 1, stagger : 0.25});
        tl.fromTo('.text', {opacity : 1}, {opacity : 0, duration : 1, stagger : 0.25, delay : 1});
        tl.to('.slider', {y : "-100%", duration : 1, delay: 1}, "-=2");
        tl.to('.intro', {y : "-100%", duration : 1}, "-=1");
        tl.fromTo('nav', {opacity : 0}, {opacity : 1, duration : 1});

        pageAnimate = (page) => {
            var distance = 0
            if (page == 'gallery'){
                distance = -100
            }
            if (page == 'about'){
                distance = -200
            }
            if (page == 'team'){
                distance = -300
            }
            if (page == 'contact'){
                distance = -400
            }
            tl.to('.pages', {x : ''+distance+'%', duration : 0.5});
        };