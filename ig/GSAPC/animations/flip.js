// console.clear();

// gsap.registerPlugin(Flip, Draggable);

// const fullSize = document.querySelector('.full-Size'), thumbnail = document.querySelector(".thumbnail");

// let bleps = gsap.utils.toArray(".bleps");


// bleps.forEach((blep)) =  {
//     blep.addEventListener("click", () => {
//         let state = Flip.getState(".bleps");
//         console.log("GREETING")
//     }
// }
    

console.clear()

gsap.registerPlugin(Flip, Draggable);

const fullSize = document.querySelector(".full-size"),
      thumbnail = document.querySelector(".thumbnail");


let bleps = gsap.utils.toArray('.blep')

bleps.forEach((blep) => {
  blep.addEventListener("click", () => {
	console.log('horse')
});

})

