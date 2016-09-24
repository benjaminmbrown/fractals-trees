var Tree = function() {
    this.initialLength = 150;
    this.theta = map(mouseX, 0, width, 0, PI / 2);
    
    this.init = function() {
    	console.log('init');
    }

    this.run = function() {
        this.update();
        this.display();
    }

    this.update = function() {
    	
    }

    this.branch = function(len) {
    
        var sw = map(len, 2, 120, 1, 10);
        strokeWeight(sw);
        // strokeWeight(2);

        line(0, 0, 0, -len);

        translate(0, -len);

        len *= 0.7;

        if (len > 3) {
        	
            push();
            //rotate(this.theta);
            rotate(.77);
            this.branch(len);
            pop();

            push();
            //rotate(-this.theta);
            rotate(-.77);
            this.branch(len);
            pop();
        }
    }

    this.display = function() {
        translate(width/2,height);
        stroke(255);
        this.branch(this.initialLength);
    }
}
