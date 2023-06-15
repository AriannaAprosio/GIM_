var x;
var y;
var r;
var g;
var b;

function setup() {
  createCanvas(1000, 1000);
  
  ellipseMode(CORNERS);
  angleMode(DEGREES); 
  
  r =random(0, 255);
  g =random(0, 255);
  b =random(0, 255);

  hour_angle = 0;
  minute_angle = 0;
}

function draw() {
  background(0, 100);
  
  r = r + random(-5, 5);
  g = g + random(-5, 5);
  b = b + random(-5, 5);
  
  r= constrain(r, 0, 255);
  g= constrain(g, 0, 255);
  b= constrain(b, 0, 255);
  
 

  draw_flower(width/2,height/2, 300, second(), 70, 60, 6);
}

function draw_flower(x_translate, y_translate, leaf_radius, num_of_leaves, elipse_width, elipse_length, rotate_angle){
  push();
  translate(x_translate, y_translate);
  for(var i=0; i < num_of_leaves; i++) {
    fill(r, g, b);
    rotate(rotate_angle);
    ellipse(leaf_radius, 0, elipse_width, elipse_length);
 }
  pop();
}