
let board = document.getElementById('cnv');
let context = board.getContext('2d');

let bg = document.getElementById('kfen');
let i=1;

// после загрузки картинок рисуем начальное состояние поля
function init(){
	context.drawImage(bg, 0, 0);	
};

function moveOnceMouse(board){
	let boardRect = board.getBoundingClientRect();
	window.addEventListener('mouseup', function(event){
		if (i==5){
			if (event.clientY < boardRect.bottom-200 && event.clientY > boardRect.bottom-230) {
				context.drawImage(document.getElementById("6"), 0, 0);
				i=7;
			};
			if (event.clientY < boardRect.bottom-140 && event.clientY > boardRect.bottom-170) {
				context.drawImage(document.getElementById("5"), 0, 0);
				i=8;
			};
		}
		else {
			context.drawImage(document.getElementById(`${i}`), 0, 0);
			if(i==7) i=8;
			i++
		}
	});
}



window.onload = init;
document.onmouseup = moveOnceMouse(board);
document.onkeyup = moveOnceKey(board);
