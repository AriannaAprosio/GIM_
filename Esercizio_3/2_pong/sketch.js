let posX 
let posY 
let velX 
let velY 

function setup(){
	createCanvas(windowWidth, windowHeight)
	posX = width/6
	posY = height/6
	velX = 8
	velY = 8
	background(255, 180, 0)
}

function draw(){

	noStroke()
	fill((200), random (70), random(210))


	

	ellipse(posX, posY, 40, 40)
	
	posX = posX + velX
	posY = posY + velY

	if (posX >= width  || posX <= 0) velX = -velX
	if (posY >= height || posY <= 0) velY = -velY

}

       
