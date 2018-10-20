//dependencies
let robot = require("robotjs");
let Jimp = require("jimp");
var screenshot = require('desktop-screenshot');
let xPos = 50;
let yPos = -50;

screenshot("wow.jpg", function(error, complete) {
	    if(error)
	        console.log("Screenshot failed", error);
		});
console.log("first");
//Interval to repeat every 2 seconds
let interval = setInterval(function(){ 
		//creating and saving the screenshot to wow.jpg
		screenshot("wow.jpg", function(error, complete) {
	    if(error)
	        console.log("Screenshot failed", error);
		});
		console.log(".")
		//using jimp to read the wow.jpg
		Jimp.read('wow.jpg', (err, image) => {
			//scanning only a part of the image starting from x = 232 and y = 161
			//to x = 232 + 900 and y = 161 + 400(focusing on the center of the screen)
			//below function is executed for every pixel(x,y) on the image
			image.scan(232, 161, 900, 400, function(x, y, idx) {
				var red = this.bitmap.data[idx + 0];
				var green = this.bitmap.data[idx + 1];
				var blue = this.bitmap.data[idx + 2];
				var alpha = this.bitmap.data[idx + 3];
				//condition to check for green color, if true, save the x and y
				if(red<50 && green>200 && blue<50){
					xPos = x;
					yPos = y;
				}
			});
			//using Robotjs to  point to the coordinates and rightclick the NPC
			robot.moveMouse(xPos-50, yPos+50);
			robot.mouseClick("right");
		});
	}, 2000);
