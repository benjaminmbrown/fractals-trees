var Branches = [];

var Tree = function() {
    this.initialLength = 50;


    this.init = function() {
        console.log('init');
    }

    this.run = function() {
        this.update();
        this.display();
    }

    this.update = function() {
        //this.theta = map(mouseX, 0, width, 0, PI / 2);
        this.theta = random(0, PI / 3);
    }

    this.leaf = function() {
        push();
        fill(color(0, 255, 0, 30));
        noStroke();
        ellipse(0, 0, 15, 15);
        pop();
    }

    this.branch = function(len) {
        var n = random(1, 3);
        var sw = map(len, 2, 120, 1, 10);
        strokeWeight(sw);

        line(0, 0, 0, -len);

        translate(0, -len);

        len *= 0.7;
        if (len > 1) {
            for (var i = 0; i < n; i++) {
                this.theta = random(-PI / 2, PI / 2);
                push();
                rotate(this.theta);
                this.branch(len);
                pop();
            }

        } else {
            this.leaf();
        }
    }

    this.display = function() {
        translate(width / 2, height);
        stroke(255);
        this.branch(this.initialLength);
    }
}
