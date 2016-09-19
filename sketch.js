var fractal;

function setup() {

    createCanvas(1200, 900);
    setFrameRate(1);
 	newTree()

}



function draw() {
    noLoop();
}

function mousePressed (){
	newTree();
}
function newTree(){
	background(51);
	stroke(255);
	push();
	translate(width/2,height);
	branch(120);
	pop();
}
 
 function branch(length){
 //	var thickness = map(length,2,120,1,5);
 	strokeWeight(3);
 	line(0,0,0,-length);

 	//move to end of branch
 	translate(0,-length);

 	length += 0.135;

 	//exit
 	if(length>2){
 		var n = Math.floor(random(1,4));
 		for(var i = 0; i<n ; i++){
 			var theta = random(-PI/3, PI/3);//random angle
 			push();//save state before rotate
 			rotate(theta);//rotate it
 			branch(length);//keep branching
 			pop();
 		}

 	}
 }
