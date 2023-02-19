import selfy from './images/selfy.json' assert { type: 'json' };

let selfy_photo;
let canvasHeight;
let canvasWidth;

let imageHeight;
let imageWidth;

let points;

let right_eye;
let left_eye;

function preload() {
	// loading json files
	selfy_photo = loadImage('images/selfy.png');
}

function setup() {
	
	// setting up variables
	
	right_eye = selfy.specs.right_eye;
	left_eye = selfy.specs.left_eye;
	
	canvasHeight = 500;
	canvasWidth = canvasHeight;
	imageHeight = 500;
	imageWidth = imageHeight;
	
	points = [];
	
	// creating things
	createCanvas(canvasWidth, canvasHeight);
	
	// debugging part ?
	
	console.log(left_eye);  
	console.log(right_eye);  
}

function draw() {
	background(220);
	image(selfy_photo, 0, 0, imageWidth, imageHeight);

	for(let p = 0; p < points.length; ++p)
	{
		stroke(255,0,0);
		strokeWeight(3);
		point(points[p].x, points[p].y);
	}
	noStroke()
	fill(255,0,0,100);
	ellipse(Number(right_eye[0])*imageWidth, Number(right_eye[1])*imageHeight, Number(right_eye[2])*imageWidth, Number(right_eye[3])*imageHeight);

	ellipse(Number(left_eye[0])*imageWidth, Number(left_eye[1])*imageHeight, Number(left_eye[2])*imageWidth, Number(left_eye[3])*imageHeight);
}

function mouseReleased()
{
	let p = createVector(mouseX, mouseY);
	points.push(p);
}

window.setup = setup;
window.preload = preload;
window.draw = draw;
window.mouseReleased = mouseReleased;
