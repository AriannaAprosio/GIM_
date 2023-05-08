function setup(){
	createCanvas(400, 400)
}

function draw(){
	background(220,220,220)

	stroke(0)
	point(0, 0)
		
// funzione che disegna un segmento 	
	line(50, 60, 200, 280)

	noStroke(0)

	fill(255, 0, 0)

	rect(120, 120, 90, 90)
    
	stroke(0, 200, 0)

	strokeWeight(3)
	fill(255, 255, 0)
	rect(150, 150, 90, 90)
	
	fill(0, 180, 240, 128)
	ellipse(230, 270, 80, 80)

	noFill()
	triangle(310, 90,  390, 160,  260, 180)


}