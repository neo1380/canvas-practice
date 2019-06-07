var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var r= Math.random()*255;
var g= Math.random()*255;
var b= Math.random()*255;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x,y,radius,dx,dy){

	this.x =x;
	this.y =y;
	this.dx =dx;
	this.dy =dy;
	this.radius =radius;

	this.draw = function() {
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,Math.PI*2,false);
		ctx.strokeStyle ='rgba('+r+','+g+','+b+',1)';
		ctx.fillStyle = 'rgba('+r+','+g+','+b+',1)';
		ctx.fill();
		ctx.stroke();	
	}

	this.update = function(){
		if(this.x>innerWidth-this.radius || this.x-this.radius < 0){
			this.dx=-this.dx;
		}
		if(this.y+this.radius>innerHeight || this.y-this.radius < 0){
			this.dy=-this.dy;
		}
		this.x+=this.dx;
		this.y+=this.dy;

		this.draw();
	}

}



var circleArray =[];
for (var i = 0; i < 100; i++) {

	var x = Math.random()* (innerWidth - radius * 2) + radius;
	var y = Math.random()* (innerHeight - radius * 2) + radius;
	var dx = (Math.random()-0.5 )*5;
	var dy = (Math.random()-0.5 )*5;
	var radius = 30;

	var circle = new Circle(x,y,radius,dx,dy);
	circleArray.push(circle);
}

function animate(){

	requestAnimationFrame(animate);
	ctx.clearRect(0,0,innerWidth,innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
	
}

animate();