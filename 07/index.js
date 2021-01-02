//objects
var cvs = document.getElementById('cnv');;// канвас
var ctx=cvs.getContext("2d"); //игра в 2д

var char= new Image();
var bg= new Image();
var ice= new Image();
var diamond= new Image();
var charLeft= new Image();
var charRight= new Image();
var charLeftJump= new Image();
var charRightJump= new Image();
let number0 = new Image();
let number1 = new Image();
let number2 = new Image();
//находим объекты
char.src="img/front.png";
bg.src="img/phon.png";
diamond.src="img/diamond.png";
charLeft.src="img/run-left.png";
charRight.src="img/run-right.png";
charLeftJump.src="img/jump-left.png";
charRightJump.src="img/jump-right.png";
number0.src="img/0.png";
number1.src="img/1.png";
number2.src="img/2.png";

//выполняем функцию после последнего объекта
bg.onload= draw;
let d=0;
//расположение
let charCol=10 , charRow= 480;
let move="";
//рисуем объекты
function draw(){
	ctx.clearRect(0, 0, cvs.width, cvs.height);
	ctx.drawImage(bg, 0, 0);
	if (d==0) {
		ctx.drawImage(diamond,90,60); 
		ctx.drawImage(number0,20,20,50,50);
	}
	else {
		ctx.drawImage(number1,20,20,50,50);
	}
	switch (move){
		case "left":
			ctx.drawImage(charLeft,charCol,charRow);
			break;
		case "right":
			ctx.drawImage(charRight,charCol,charRow);
			break;
		case "stay":
			ctx.drawImage(char,charCol,charRow);
			break;
		case "jump":
			ctx.drawImage(char,charCol,charRow);
			break
		default:
		    ctx.drawImage(char,charCol,charRow);
	}
}


// проверяет запрыгнула на льдину или нет
let iceCheck=function(charCol,charRow,i){
	if ((i+200)==510 || (i+200)==387 || (i+200)==238) 
		return 1;
}
//движение 
function moveOnce(event) {
	// движение вправо
	//проверяем нажатую клавишу/клик
	switch (event.code){
		case "ArrowRight":
			if (charCol < 751 || charRow==39){ 
			charCol+=10;
			move="right";
			draw();
			}
			break;
		case "ArrowLeft":
			if (charCol > 0){
			charCol-=10;;
			move="left";
			draw();
			}
			break;
		case "ArrowUp":
			for(let i=charRow; i>(charRow-200); i--){                 //прыгает
				setTimeout(moveJump1,100);
	        }
	        charRow-=200;
			for(let j=charRow; j<(charRow+200); j++){                //падает
				setTimeout(moveJump2,100);
				if(iceCheck(charCol,charRow,j)==1)break;
	        }
	        charRow+=200;
			break;
}
		if ((charCol+100)>150 && (charCol+100)<213 && (charRow+100)<182 && (charRow+100)>132) d=1;//console.log('puk');

}
//гравитация
function moveJump1(){
        charRow--;
		move="jump";
		draw();
}
function moveJump2(){
        charRow++;
		move="jump";
		draw();
}
function stay(){
	move="stay";
	draw();
}
// чтобы лучше понимать что происходит
function shelk(){
	console.log ("Клик в "+ event.clientX + ", "+ event.clientY +"!");
	console.log ("Координаты в "+ charCol + ", "+ charRow +"!");
}
document.onkeydown = moveOnce;
document.onkeyup = stay;
document.onmouseup = shelk;
