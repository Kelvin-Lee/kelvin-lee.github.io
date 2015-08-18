function setup(){
	createCanvas(640, 480);
}

function draw(){
	if (mouseIsPressed){
		fill(0);
	} // if
	else{
		fill(255);
	} // else
	ellipse(mouseX, mouseY, 80,80);
}
