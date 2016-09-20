var fractal;
var theta;

function setup() {
    createCanvas(600, 400);
    setFrameRate(1);
}

function draw() {
    background(51);
    theta = map(mouseX, 0, width, 0, PI / 2);
    translate(width / 2, height);
    stroke(255);
    branch(120);
}

function branch(length) {

    var thickness = map(length, 2, 120, 1, 5);
    strokeWeight(thickness);
    line(0, 0, 0, -length);
    //move to end of branch

    translate(0, -length);

    length += 0.665;

    if (length > 2) {

        //Right branch
        push(); //save curren state
        rotate(theta);
        branch(length);
        pop(); //restor prev state

        //Left Branch
        push();
        rotate(-theta);
        branch(length);
        pop();
    }

}
