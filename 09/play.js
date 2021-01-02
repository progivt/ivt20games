var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bullet = new Image();
var bg = new Image();
var bg2 = new Image();
var fg = new Image();
var fg2 = new Image();
var swrdUp = new Image();
var swrdBottom = new Image();

bullet.src = "img/head.png";
bg.src = "img/bg1.png";
bg2.src = "img/bg2.png";
fg2.src = "img/fg2.png";
swrdUp.src = "img/swrdUp.png";
swrdBottom.src = "img/swrdBottom.png";

var loadMusic = new Audio();
var deathMusic = new Audio();

loadMusic.src = "audio/onload.mp3";
deathMusic.src = "audio/death.mp3";

var rast = 120;

document.addEventListener("keydown", moveUp);
var posX = 10;
var posY = 150;
var gravitation = 2;

function moveUp() {
	posY -= 50;
	gravitation = 2;
}
var srwd = [];
srwd[0] = {
	x : cvs.width,
	y : 0
}
var score = 0;

function draw() {
	loadMusic.play();
	ctx.drawImage(bg, 0, 0);

	for(var i = 0; i < srwd.length; i++) {
		ctx.drawImage(swrdUp, srwd[i].x, srwd[i].y);
		ctx.drawImage(swrdBottom, srwd[i].x, srwd[i].y + swrdUp.height + rast);

		srwd[i].x-=5;

		if(srwd[i].x == 652) {
			srwd.push({
			x : cvs.width,
			y : Math.floor(Math.random() * swrdUp.height) - swrdUp.height
			});
		}

		if(
		posX + bullet.width >= srwd[i].x//
		&& 
		posX <= srwd[i].x + swrdUp.width//
		&& 
		(posY <= srwd[i].y + swrdUp.height//
		|| 
		posY + bullet.height >= srwd[i].y + swrdUp.height + rast)//пол
		)
		{
			deathMusic.play();
			alert("GAME OVER, score = " + score);
			alert.onclick(location.reload());
		}
		if(srwd[i].x == 42) {
			score++;
		}
	}
	ctx.drawImage(fg2, 0, cvs.height - fg2.height);
	ctx.drawImage(fg2, 288, cvs.height - fg2.height);
	ctx.drawImage(fg2, 576, cvs.height - fg2.height);
	ctx.drawImage(fg2, 864, cvs.height - fg2.height);
	ctx.drawImage(bullet, posX, posY);

	posY += gravitation;
	if(posY + bullet.height >= cvs.height - fg2.height){
		gravitation=0;
	}
	else{
		gravitation++;
	}
	ctx.fillStyle = "#000";
	ctx.font = "24px Times New Roman";
	ctx.fillText("Score: " + score, 10, cvs.height - 20);
	requestAnimationFrame(draw);

}
swrdBottom.onload = draw;