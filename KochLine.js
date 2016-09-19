function KochLine(a,b){

	this.start = a.copy();
	this.end = b.copy();	

	this.display = function(){
		stroke(0);

		line(this.start.x,this.start.y, this.end.x,this.end.y);
	}

	this.kochA =function(){
		return this.start.copy();
	}

	this.kochB =function(){
		var v = p5.Vector.sub(this.end,this.start);
		v.div(3);
		v.add(this.start);
		return v;

	}

	this.kochC =function(){
		var a = this.start.copy();
		var v = p5.Vector.sub(this.end,this.start);
		v.div(3);
		a.add(v);
		v.rotate(-radians(60));
		a.add(v);
		return a;
	}

	this.kochD =function(){
		var v = p5.Vector.sub(this.end,this.start);
		v.mult(2/3.0);
		v.add(this.start);
		return v;

	}
	this.kochE =function(){
		return this.end.copy()
	}
	
}