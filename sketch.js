var theta;   

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);
  theta = map(mouseX,0,width,0,PI/2); 
  length = mouseY
  translate(width/2, height);
  stroke(255);
  branch(mouseY/3);
}

function branch(len) {

  var sw = map(len,2,120,1,10);
  strokeWeight(sw);
 // strokeWeight(2);
      
  line(0, 0, 0, -len);

  translate(0, -len);

  len *= 0.66;

  if (len > 2) {
    push();    
    rotate(theta);   
    branch(len);      
    pop();    

    push();
    rotate(-theta);
    branch(len);
    pop();
  }
}