// //import { Selfy } from './Selfy.js'; 
// const Selfy = require(["./Selfy"]);

let selfy_photo;
let canvasHeight;
let canvasWidth;

let imageHeight;
let imageWidth;

function preload() {
	imageHeight = 500;
	imageWidth = imageHeight;
	selfy_photo = new Selfy(0, 0, imageWidth, imageHeight, 'images/selfy.png');
}

function setup() {
	
	console.log(selfy_photo);
	canvasHeight = 500;
	canvasWidth = canvasHeight;
	
	// creating things
	createCanvas(canvasWidth, canvasHeight);
	
}

function draw() {
	background(220);
	selfy_photo.show();
}
