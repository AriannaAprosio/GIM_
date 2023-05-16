function setup(){
	createCanvas(windowWidth, windowHeight)
}

function draw(){
	//background(220,220,220)

	let ora = hour() + ":" + minute() + ":" + second()
    
	


	textSize(40)
	textFont("monospace")
	textAlign(CENTER, CENTER)
	fill((255), random (255), random(255))

	text(ora, mouseX, mouseY)




}