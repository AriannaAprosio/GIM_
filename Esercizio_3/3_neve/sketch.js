function setup(){
	createCanvas(windowWidth, windowHeight)		
}

function draw(){
  
   background(0,0,0)


 for(let i=0; i<200; i=i+1) {
   let spessore = random(1, 3)
   let lunghezza = random(20, 100)
   let posX = random(-200, windowWidth)
   let posY = random(-200, windowWidth)
   stroke(255)
   //strokeweight(spessore)
   line(posX, posY, posX, posY + lunghezza)
 } 
}