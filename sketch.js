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
    //tree.run();


    theta = map(mouseX, 0, width, 0, PI / 2);
    theta = map(200, 0, width, 0, PI / 2);
    length = mouseY
    translate(width / 2, height);
    stroke(255);
    branch(mouseY/3);
}

function branch(len) {

    var sw = map(len, 2, 120, 1, 10);
    strokeWeight(sw);
    // strokeWeight(2);

    line(0, 0, 0, -len);

    translate(0, -len);

    len *= 0.7;

    if (len > 3) {
        push();
        rotate(theta);
        branch(random(len - 2, len + 2));
        pop();

        push();
        rotate(-theta);
        branch(random(len - 2, len + 2));
        pop();
    }
}
