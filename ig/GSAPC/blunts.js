 var tl = gsap.timeline()

 tl.from ("h2",{
    y:-30,
    opacity:0,
    duration: 0.9,
 })


 tl.from ("h4",{
    y:-20,
    opacity:0,
    duration: 0.9,
    stagger: 0.2,
 })

 tl.from ("h1",{
    y:-20,
    opacity:0,
    duration: 0.9,
    stagger: 0.3,
    scale: 0.5,
 })
