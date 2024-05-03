// const { default: gsap } = require("gsap")

// const { rotate } = require("three/examples/jsm/nodes/Nodes.js")

console.log("GSAP CLASS 100")

// whats GSAP is a wildy robust javascript animation library built for professionals. used to create UI, SVG and other javascript animations................................


//  gsap CDN  

//  IMPORTANT NOTE: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

gsap.to(".box1", {
     x:400,
     duration:15,
     rotate: 185,
     backgroundColor: "rgba(12,70,50)",
     scale: 3.7,
     borderRadius:"50%",
     delay:1
})

gsap.from(".box2", {
    x:1200,
    y:500,
    duration:0.02,
    delay:1
})