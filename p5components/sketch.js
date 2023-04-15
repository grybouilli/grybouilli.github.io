let selfy_photo;
let canvasHeight;
let canvasWidth;

let imageHeight;
let imageWidth;

function preload() {
	imageHeight = 500;
	imageWidth = imageHeight;
	selfy_photo = new Selfy(0, 0, imageWidth, imageHeight, 'images/selfy_no_eye.png');
	selfy_photo.loadJSON('libraries/json!./images/selfy.json');
}

function setup() {

	canvasHeight = 500;
	canvasWidth = canvasHeight;
	
	// creating things
	createCanvas(canvasWidth, canvasHeight);
	
}

function draw() {

	background(220);
	try{
		selfy_photo.follow(mouseX, mouseY);
	} catch(err)
	{
		console.log(err.message);
	}
	selfy_photo.show();
}

function mouseReleased()
{
}