var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var r= Math.random()*255;
var g= Math.random()*255;
var b= Math.random()*255;
var maxRadius = 50;
var minRadius = 10;
var m ={
	x:undefined,
	y:undefined
}

var colorArray =[
	"#FFF587",
	"#FF8C64",
	"#FF665A",
    "#7D6B7D",
    "#A3A1A8"
]
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener('mousemove', function(e){
	m.x = e.x;
	m.y = e.y;
});

function Circle(x,y,radius,dx,dy){

	this.x =x;
	this.y =y;
	this.dx =dx;
	this.dy =dy;
	this.radius =radius;
	this.color = colorArray[Math.floor(Math.random()*colorArray.length)];

	this.draw = function() {
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,Math.PI*2,false);
		ctx.fillStyle = this.color;
		ctx.fill();	
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

		if(m.x-this.x < 50 && m.x-this.x > -50
		&& m.y-this.y < 50 && m.y- this.y > -50){
			if(this.radius<maxRadius){
				this.radius+=1;
			}else{
				this.radius=maxRadius;
			}
			
		}else if(this.radius>2){
				this.radius-=1;
		}

		this.draw();
	}

}



var circleArray =[];
for (var i = 0; i < 1500; i++) {

	var x = Math.random()* (innerWidth - radius * 2) + radius;
	var y = Math.random()* (innerHeight - radius * 2) + radius;
	var dx = (Math.random()-0.5 )*1;
	var dy = (Math.random()-0.5 )*1;
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