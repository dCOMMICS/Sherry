// this is far from perfect
// feel free to edit or scrap
const tolerance = 50
const followers = gsap.utils.toArray(".follower")
gsap.set(followers, {xPercent:50, yPercent:-50})
let index = 0;
let numFollowers = followers.length

let lastPos = {
	x:0,
	y:0
}

let mouse = {
	x:0,
	y:0
}

//mouse pos gets recorded on every mouse move
window.addEventListener("mousemove", (e)=> {
	
	mouse.x = e.clientX
	mouse.y = e.clientY
	
})

//gsap ticker runs logic at 60fps
gsap.ticker.add(update)

function update(time, deltaTime, frame) {
	//find how far mouse has move since last tick
	let deltaX = mouse.x-lastPos.x
	let deltaY = mouse.y-lastPos.y
	
	//see if mouse has moved more than tolerance on either axis
	if(Math.abs(deltaX) > tolerance || Math.abs(deltaY) > tolerance){
		//if tolerance exceeded then do stuff to next available follower
		animateNextFollower(deltaX, deltaY)
		//store position of where mouse was the last a new follower was activated
		lastPos.x = mouse.x
		lastPos.y = mouse.y
	}
}


function animateNextFollower(deltaX, deltaY) {
	
	let nextFollower = followers[index++ % numFollowers]
	gsap.set(nextFollower, {opacity:1, x:mouse.x, y:mouse.y, zIndex:index, opacity:1})
	// add stuff here for animation
}

