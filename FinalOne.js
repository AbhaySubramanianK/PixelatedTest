var robot = require("robotjs");
var tracking = require("./tracking.js-master/tracking.js-master/src/tracking.js");
var ColorTracker = require("./tracking.js-master/tracking.js-master/src/trackers/ColorTracker.js");

//registering a new color in tracking.js
tracking.ColorTracker.registerColor('green', function(r, g, b) {
  if (r < 50 && g > 200 && b < 50) {
    return true;
  }
  return false;
});
var colors = new tracking.ColorTracker(['green']);

//Get a 1366X768 screen capture starting at 0, 0.
var img = robot.screen.capture(0, 0, 1366, 768);

console.log(img.width);
console.log(img.height);

//creating a listener and extracting the coordinates of green color
colors.on('track', function(event) {
    event.data.forEach(function(rect) {
        console.log("Green Pixel is at " + rect.x + " and " + rect.y);
    });
});
tracking.track('#img', colors);

//moving to the coordinates and right-clicking it,
//to interact with the NPC
let mouse = () =>{
	robot.moveMouseSmooth(x,y + 40);
	robot.mouseClick("right");	
}
mouse()





// var hex = img.colorAt(50, 50);
// console.log(hex);

