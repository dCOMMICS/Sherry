// const { default: gsap } = require("gsap")



// const { color } = require("three/examples/jsm/nodes/Nodes.js")

// const { rotate } = require("three/examples/jsm/nodes/Nodes.js")

console.log("GSAP CLASS 100")

// whats GSAP is a wildy robust javascript animation library built for professionals. used to create UI, SVG and other javascript animations................................


//  gsap CDN  

//  IMPORTANT NOTE: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

gsap.to("h1", {
     x:400,
     duration:15,
     rotate: 185,
     color: "rgba(13,175,50)",
     backgroundColor: "rgba(12,70,50)",
     scale: 2.7,
     borderRadius:"50%",
     stagger: 1,
     delay:1
})

gsap.from(".box2", {
    x:1200,
    y:500,
    duration:0.02,
    delay:1
})

gsap.to(".ftr", {
    x:100,
    y:500,
    // repeat:-1,
    duration: 5,
    color: "#b4b",
    stagger: 1,
    rotate: 25,
    // yoyo make the text or image redo the animation bac⏪⏪
    yoyo: true,
    delay:1
})


// // what is GSAP. 
// GSAP Basics
// box animation 
// text animation 
// stagger 
// repeat animation  or yoyo
// GSAP timeline



gsap.to(".coffetabl",{
    x:200,
    duration:3,
    rotate: 27,
    backgroundColor: "#735290",
    delay:1
})

gsap.to(".coffetabl1",{
    x:200,
    duration:3,
    rotate: -75,
    backgroundColor: "#427AA1"
})

gsap.to(".coffetabl2",{
    x:200,
    x:200,
    borderRadius: "50%",
    scale: 2.5,
    duration:3,
    rotate: 75,
    backgroundColor: "#427A"
    
})


 var tl = gsap.timeline()
 tl.to(".coffetabl3", {
    x:150,
    rotate: 70,
    duration: 1.9,
    delay: 0.5,
    borderRadius: "25%",
    backgroundColor: "#BC6C25"
 })