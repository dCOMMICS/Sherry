const { sin, radians } = require("three/examples/jsm/nodes/Nodes.js");

let emojiArr;
let images = [];

function setup() {
    createCanvasElement(800,800);

    emojiArr = createEmojiArray();

    for (let i = 0; i < 100; i++) {
        let g = createGraphics(80,80);
        g.textSize(80);
        g.textAlign(CENTER, CENTER);
        g.text(emojiArr[i], g.width /2, g.height /2);
        images.push(g);
        g.remove();
    }
}

function draw(){
    background(20);

    randomSeed(0);
    let rows =[];
    let row_num = 20;
    let col_num = 20;
    let scl = 0.9;

    let row_sum =0;
    for (let i =0; i < row_num; i++) {
        let cols =[];
        let m = 
        noise(i*99, frameCount / 400) * map ( sin((i/row_num) * TWO_PI *2) /4) + sin (radians(frameCount / 2)) * (radians (frameCount /2) % TWO_PI)
    }
}