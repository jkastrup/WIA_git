/*
     Name:	Jason Kastrup
     Date:	3/5/2015
     Class & Section:  WIA-
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message

*/


window.onload = function(){
	// Check for HTML5 Canvas
	if(Modernizr.canvas){
		// Canvas enabled
		

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
	// Set up Canvas
	var theCanvas1 = document.getElementById('Canvas1');
		
	if (theCanvas1 && theCanvas1.getContext) {
		// Set up context
		var ctx1 = theCanvas1.getContext("2d");
		if(ctx1){
			// Fill Canvas
			ctx1.fillStyle = "blue";
			ctx1.strokeStyle = "black";
			ctx1.lineWidth = 5;
			ctx1.strokeRect(0,0,50,100);
			ctx1.fillRect(0,0,50,100);
		}
	}


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
	var theCanvas2 = document.getElementById('Canvas2');
	if (theCanvas2 && theCanvas2.getContext) {
		var ctx2 = theCanvas2.getContext("2d");
		if(ctx2){
			var degrees = 360;
			var radians = (degrees/180)*Math.PI;
			
			// Set fill Color
			ctx2.fillStyle = "rgba(255,0,0,.5)";
			
			// Draw a Red Circle
			ctx2.beginPath();
			ctx2.arc(50,50,20,0,radians);
			ctx2.fill();
			ctx2.closePath();
			ctx2.stroke();
			
			// Add Stroke to Circle
			ctx2.beginPath();
			ctx2.strokeStyle = "black";
			ctx2.arc(50,50,30,0,radians);
			ctx2.stroke();
		}
	}



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
	var theCanvas3 = document.getElementById('Canvas3');
	if (theCanvas3 && theCanvas3.getContext) {
		var ctx3 = theCanvas3.getContext("2d");
		if(ctx3){
			// Set styles
			ctx3.fillStyle = "yellow";
			ctx3.strokeStyle = "black";
			ctx3.lineWidth = 2;
			
			ctx3.beginPath();
			ctx3.translate(100, 100);
			ctx3.moveTo(0,0-90);
			
			// Loop to create 5 triangles rotated around the center (100,100)
			// radius = 90, 5 = num sides, .4 = depth of the points (0-1)
			for (var i = 0; i < 5; i++)
			{
				ctx3.rotate(Math.PI / 5);
				ctx3.lineTo(0, 0 - (90*.4));
				ctx3.rotate(Math.PI / 5);
				ctx3.lineTo(0, 0 - 90);
			}
			ctx3.fill();
			ctx3.stroke();
			
		}
	}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
var theCanvas4 = document.getElementById('Canvas4');
	if (theCanvas4 && theCanvas4.getContext) {
		var ctx4 = theCanvas4.getContext("2d");
		if(ctx4){
			ctx4.strokeStyle = "red";
			ctx4.fillStyle = "orange";
			
			ctx4.beginPath();
			ctx4.moveTo(20, 150);
			ctx4.bezierCurveTo(45,100,53,100, 60,150);
			ctx4.stroke();
			
			ctx4.beginPath();
			ctx4.moveTo(60,150);
			ctx4.bezierCurveTo(85, 100, 85, 100, 100, 150);
			ctx4.stroke();
			
			ctx4.beginPath();
			ctx4.moveTo(100,150);
			ctx4.bezierCurveTo(125, 100, 125, 100, 140, 150);
			ctx4.stroke();
			
			ctx4.beginPath();
			ctx4.moveTo(140,150);
			ctx4.bezierCurveTo(165, 100, 145, 100, 180,150);
			ctx4.stroke();
			
		}
	}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
	var theCanvas5 = document.getElementById('Canvas5');
	if (theCanvas5 && theCanvas5.getContext) {
		var ctx5 = theCanvas5.getContext("2d");
		if(ctx5){
			var mystring = "Canvas text is easy :)";
			
			// Stroke and Filled text
			ctx5.font = "50pt Helvetica";
			ctx5.fillStyle = "blue";
			ctx5.strokeStyle = "gray";
			ctx5.lineWidth = 3;
			ctx5.fillText(mystring, 15, 90);
			ctx5.strokeText(mystring, 15, 90);
			
			// shadow
			ctx5.fillStyle = "rgba(25,175,150,.3)";
			ctx5.fillText(mystring, 15, 105);
		}
	}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
	var theCanvas6 = document.getElementById('Canvas6');
	if (theCanvas6 && theCanvas6.getContext) {
		var ctx6 = theCanvas6.getContext("2d");
		if(ctx6){
			var myimg = document.getElementById("img1");
			
			// Display full image
			ctx6.drawImage(myimg, 0, 0);
			//Scaled down 50%
			ctx6.drawImage(myimg, 0, 1200, 1650, 544);
			//Sliced Section (grabs some dots)
			ctx6.drawImage(myimg, 1500, 500, 500, 100, 0, 1800, 500, 200);
		}
	}


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
	var theCanvas7 = document.getElementById('Canvas7');
	if (theCanvas7 && theCanvas7.getContext) {
		var ctx7 = theCanvas7.getContext("2d");
		if(ctx7){
			var title = "My home TV";
			var degrees = 360;
			var radians = (degrees/180)*Math.PI;
			
			// Stroke and Filled text
			ctx7.font = "14pt Helvetica";
			ctx7.fillStyle = "#ccc";
			ctx7.strokeStyle = "black";
			ctx7.lineWidth = 1;
			ctx7.fillText(title, 42, 15);
			ctx7.strokeText(title, 42, 15);
			
			// TV Stand
			ctx7.beginPath();
			ctx7.fillStyle = "brown";
			ctx7.strokeStyle = "#000";
			ctx7.lineWidth = 2;
			ctx7.strokeRect(30,120,130,50);
			ctx7.fillRect(30,120,130,50);
			
			// TV outlines
			ctx7.beginPath();
			ctx7.fillStyle = "#ddd";
			ctx7.strokeStyle = "#000";
			ctx7.lineWidth = 3;
			ctx7.strokeRect(20,20,150,100);
			ctx7.fillRect(20,20,150,100);
			ctx7.beginPath();
			ctx7.fillStyle = "#000";
			ctx7.strokeStyle = "#ddd";
			ctx7.lineWidth = 2;
			ctx7.strokeRect(30,30,130, 80);
			ctx7.fillRect(30,30,130,80);
			
			// TV buttons
			ctx7.beginPath();
			ctx7.fillStyle = "#fff";
			ctx7.arc(50,115,6,0,radians);
			ctx7.fill();
			ctx7.closePath();
			ctx7.beginPath();
			ctx7.lineWidth = 1;
			ctx7.strokeStyle = "black";
			ctx7.arc(50,115,6,0,radians);
			ctx7.stroke();
			
			ctx7.beginPath();
			ctx7.fillStyle = "#fff";
			ctx7.arc(80,115,6,0,radians);
			ctx7.fill();
			ctx7.closePath();
			ctx7.beginPath();
			ctx7.lineWidth = 1;
			ctx7.strokeStyle = "black";
			ctx7.arc(80,115,6,0,radians);
			ctx7.stroke();
			
			ctx7.beginPath();
			ctx7.fillStyle = "#fff";
			ctx7.arc(115,115,6,0,radians);
			ctx7.fill();
			ctx7.closePath();
			ctx7.beginPath();
			ctx7.lineWidth = 1;
			ctx7.strokeStyle = "black";
			ctx7.arc(115,115,6,0,radians);
			ctx7.stroke();
			
			ctx7.beginPath();
			ctx7.fillStyle = "#fff";
			ctx7.arc(150,115,6,0,radians);
			ctx7.fill();
			ctx7.closePath();
			ctx7.beginPath();
			ctx7.lineWidth = 1;
			ctx7.strokeStyle = "black";
			ctx7.arc(150,115,6,0,radians);
			ctx7.stroke();
			
		}
	}
  }// end if(Modernizr.canvas)

}// End window.onload