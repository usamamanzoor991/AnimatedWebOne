var tl = gsap.timeline();

tl.from("nav h2,#links h3,#links button", {
    y: -30,
    delay: 0.3,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
});

tl.from("#left h1", {
    x: -30,
    duration: 0.3,
    opacity: 0,
    stagger: 0.1,
});

tl.from("#left p", {
    x: -20,
    duration: 0.3,
    opacity: 0,
    stagger: 0.1,
});

tl.from("#left button", {
    duration: 0.3,
    opacity: 0,
    stagger: 0.1,
});

tl.from("#right img", {
    duration: 0.3,
    scale: 0,
    stagger: 0.1,
},"-=0.3");

tl.from("#adver img", {
    duration: 0.3,
    scale: 0,
    stagger: 0.1,
});

//Page 2

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#container",
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        scrub: 1.5
    }
});

tl2.from("#services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
});

tl2.from("#container .left.line1", {
    x: -80,
    opacity: 0,
    duration: 0.5,
},"hello");

tl2.from("#container .right.line1", {
    x: 80,
    opacity: 0,
    duration: 0.5,
},"hello");

tl2.from("#container .left.line2", {
    x: -80,
    opacity: 0,
    duration: 0.5,
},"hello1");

tl2.from("#container .right.line2", {
    x: 80,
    opacity: 0,
    duration: 0.5,
},"hello1");