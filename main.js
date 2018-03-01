function setup() {
	createCanvas(640, 480);
}

function draw() {
	background('#FFFAED');
	var x = mouseX;
	var y = mouseY;
	
	noStroke();
	/*fill('#52C5DC');
	ellipse(x, y, 200, 200);
	
	fill('#EFB8D2');
	ellipse(x, y + 30, 64, 64);
	
	fill('#FFFFFF');
	ellipse(x+42, y-26, 64, 64);
	
	fill('#7FC35E');
	ellipse(x+42, y-26, 40, 40);

	fill('#FFFFFF');
	ellipse(x-42, y-26, 64, 64);
	
	fill('#7FC35E');
	ellipse(x-42, y-26, 40, 40);
	
	fill('#52C5DC');
	push();
	translate(x-100, y-80);
	rotate(Math.PI / 4);
	ellipse(0,0,52,92);
	pop();
	
	fill('#52C5DC');
	push();
	translate(x+100, y-80);
	rotate(-Math.PI / 4);
	ellipse(0,0,52,92);
	pop();
	
	fill('#EE3E36');
	arc(x-20, y+80, 40, 70, 0, PI+QUARTER_PI, CHORD);
	*/
	fill('#d8d786');
	rect(x,y,130,250);
	stroke('#f76c6c');
	strokeWeight(2);
	noFill();
	
	
	ellipse(x+30, y + 40, 30, 42);
	
	
	ellipse(x+80, y + 60, 30, 30);
	
	stroke('#6abcf7');
	strokeWeight(5);
	
	point(x+80, y+60);
	point(x+30, y+40);
	
	arc(x+ 75, y + 85, 120, 60, 1, 3);
	noStroke();
	fill('#FFFAED');
	triangle(x+90, y, x+100,y+ 40, x+110, y);
	
	stroke('#000000');
	strokeWeight(4);
	line(x+115, y+2, x+115, y+30);
}
