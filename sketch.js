let selfy_photo;
let canvasHeight;
let canvasWidth;

let imageHeight;
let imageWidth;

function preload() {
	imageHeight = 200;
	imageWidth = imageHeight;
	selfy_photo = new Selfy(0, 0, imageWidth, imageHeight, 'images/selfy_no_eye.png');
	selfy_photo.loadJSON('libraries/json!./images/selfy.json');
}

function setup() {

	canvasHeight = imageHeight;
	canvasWidth = canvasHeight;
	
	// creating things
	var canvas = createCanvas(canvasWidth, canvasHeight);
	canvas.parent('selfy-holder');
	
}

function draw() {

	background(0,0,0,0);
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

function windowResized() {
	resizeCanvas(canvasWidth, canvasHeight);
  }