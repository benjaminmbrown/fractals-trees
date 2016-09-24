var theta;
var threshold = 15;

var tree;

function setup() {
    createCanvas(640, 360);
    frameRate(40);
    tree = new Tree();
    tree.init();

}

function draw() {
    background(51);
    tree.run();

}
