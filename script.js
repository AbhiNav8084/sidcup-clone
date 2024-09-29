gsap.to("#nav",{
    backgroundColor : "black",
    duration : 0.5,
    height : "120px",
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        markers: true
    }
})