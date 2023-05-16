let posX 
let posY 
let velX 
let velY 

function setup(){
	createCanvas(windowWidth, windowHeight)
	posX = width/2
	posY = height/2
	velX = 3
	velY = 3
	background(240, 60, 0)
}

function draw(){

	noStroke()
	//fill(map(posX,0, width, 0, 255), map(posY, 0, width, 8, 255), 0)

	

	ellipse(posX, posY, 400, 400)
	
	posX = posX + velX
	posY = posY + velY

	if (posX >= width  || posX <= 0) velX = -velX
	if (posY >= height || posY <= 0) velY = -velY

}

       
