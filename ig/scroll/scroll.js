console.log("See you SOON comrades!");

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select the element you want to animate
const element = document.querySelector('.your-element');

// Create the animation
gsap.to(element, {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: element,
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: true,
  },
});
