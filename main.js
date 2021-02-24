// This is the code for canvas variables
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//this code is for drawing a rectangle
ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=2;
ctx.rect(150, 143, 430, 200);
ctx.stroke();
//Inside the rectangle these five circles will be drawn
//this code is for drawing a circle
ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=2;
ctx.arc(250, 210, 40, 0, 2*Math.PI);
ctx.stroke();
//this code is for drawing another circle(for the logo of the olympic!)
ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=2;
ctx.arc(350, 210, 40, 0, 2*Math.PI);
ctx.stroke();
//this code is for drawing another circle(for the logo of the olympic!)
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(450, 210, 40, 0, 2*Math.PI);
ctx.stroke();
//this code is for drawing another circle(for the logo of the olympic!)
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.arc(300, 250, 40, 0, 2*Math.PI);
ctx.stroke();
//this code is for drawing another circle(for the logo of the olympic!)
ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineWidth=2;
ctx.arc(400, 250, 40, 0, 2*Math.PI);
ctx.stroke();