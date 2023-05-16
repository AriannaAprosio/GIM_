function setup(){
	createCanvas(windowWidth, windowHeight)
}

function draw(){
let h = hour()
let m = minute()
let s = second()
let ms = new Date().getMilliseconds()

let angolo_h = TWO_PI / 12 * h + TWO_PI / 12 /60 * m 
let angolo_m = TWO_PI / 60 * m
let angolo_s = TWO_PI / 60 * s + + TWO_PI / 60 * ms / 1000
  
background(255, 200, 0)

//sposto il punto d'origine
translate(width/2, height/2)
scale (0.8)

//bordo esterno
fill(0)
noStroke()
ellipse(0, 0, 440, 440)


fill(255)
push()
for (let i=0; i<60; i++) {
	if (i % 5 == 0) {
	rect(-4, -210, 8, 50)
    } else {
    rect(-4, -210, 8, 10)
    }

rotate(TWO_PI / 60)
}
pop()
//push e pop vengono usate in modo che quella funzione non interferisce con altre

//ore
push ()
rotate (angolo_h)
noStroke()
fill (255)
rect(-5, 20, 15, -150)
pop ()

//minuti
push ()
rotate (angolo_m)
noStroke()
fill (255)
rect(-5, 20, 10, -180)
pop ()


//secondi
push ()
rotate (angolo_s)
noStroke()
fill (255, 0, 0)
rect(-2.25, 20, 5, -200)
ellipse(0, -170, 30, 30)
pop ()
//l'oggetto rimane sempre centrato, a meno che come ho fatto cambi l'origine 
//rect(width/2, height/2, 200, 2)
//TWO_PI 2 pigreco
//ellipse(width/2, height/2, 50, 50)




//centro
//ellipse(0, 0, 5, 5)
//fill(255)
}

// se apro il sito si ha il resize automatico 
function windowResized(){
resizeCanvas(windowWidth, windowHeight)
}