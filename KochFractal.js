var KochFractal = function() {
    this.start = createVector(0, height - 20);
    this.end = createVector(width, height - 20);
    this.lines = [];
    this.count = 0;

    this.next = function() {
    	console.log('next');
        this.lines = this.iterate(this.lines);
        this.count++;
    }

    this.restart = function() {
        this.count = 0;
        this.lines = [];
        this.lines.push(new KochLine(this.start, this.end));
    }
    this.restart();

    this.getCount = function() {
        return this.count;
    }


    this.render = function() {
    	console.log('render!',this.lines);
        for (var i=0; i < this.lines.length; i++) {
        	console.log('render',this.lines[i]);
            this.lines[i].display();
        }
    }

    this.iterate = function(before) {
        var currentState = [];

        for (var i = 0; i < this.lines.length; i++) {
            var a = this.lines[i].kochA();
            var b = this.lines[i].kochB();
            var c = this.lines[i].kochC();
            var d = this.lines[i].kochD();
            var e = this.lines[i].kochE();


            currentState.push(new KochLine(a, b));
            currentState.push(new KochLine(b, c));
            currentState.push(new KochLine(c, d));
            currentState.push(new KochLine(d, e));
        }

        return currentState;

    }

}
