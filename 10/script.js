let polkaopened,polkaleftopened,chrnfound=0,oladfound=0,khomusfound=0;

	let imgs= ['images/jk.png', 
	'images/yiren.png', 
	'images/дженни.png', 
	'images/сонхун.png', 
	'images/юнги.png', 
	]
	let c = 0;

	function nextImg() {
		c = (c+1) % 5;
		document.getElementById("jk").src = imgs[c];
	}
	function prevImg() {
		c = (5+c-1) % 5;
		document.getElementById("jk").src = imgs[c];
	}
	function privet()
	{
		document.getElementById('vlevo').remove();
		document.getElementById('vpravo').remove();
		document.getElementById('select').remove();
		document.getElementById('teext').style.display='none';
		document.getElementById('4khol').style.display='block';
		document.getElementById('find').style.display='block';
		document.getElementById('polkaleft').style.display='block';
		document.getElementById('polkaright').style.display='block';
		document.getElementById('skafclick').style.display='block';
	}
	function openpolka()
	{
		polkaopened = 1;
		document.getElementById('4ron').style.display='block';
		if(polkaleftopened == 1) {
			document.getElementById('opened3').style.display='none';
			document.getElementById('opened2').style.display='block';
		} else {
			document.getElementById('polka').style.display='none';
			document.getElementById("opened").style.display='block';
		}

	}

	function openpolka2()
	{
		polkaleftopened = 1;
		if(polkaopened == 1) {
			document.getElementById("olad").style.display='block';
			document.getElementById('opened').style.display='none';
			document.getElementById("opened2").style.display='block';
		} else {
			document.getElementById("olad").style.display='block';
			document.getElementById('polka').style.display='none';
			document.getElementById("opened3").style.display='block';
		}
	}
	function openSkaf()
	{
		document.getElementById('khomus').style.display='block';
		document.getElementById('skaf').style.display='none';
		document.getElementById("openedskaf").style.display='block';
	}
	function minusolad()
	{
		oladfound = 1;
		document.getElementById('olad').remove();
		if(chrnfound==1 && khomusfound==0) {
			document.getElementById('4khol').innerHTML = "<s>чороон</s><br>хомус</br><s>оладьи</s>";
		}
		if(chrnfound==0 && khomusfound==0) {
			document.getElementById('4khol').innerHTML = "чороон<br>хомус</br><s>оладьи</s></br>";
		}
		if(chrnfound==0 && khomusfound==1) {
			document.getElementById('4khol').innerHTML = "чороон<br><s>хомус</s></br><s>оладьи</s></br>";
		}
		if(chrnfound==1 && khomusfound==1) {
			document.getElementById('end').style.display='block';
			document.getElementById('4khol').style.display='none';
			document.getElementById('find').style.display='none';
			document.getElementById('restart').style.display='block';
		}
	}
	function minus4rn()
	{
		chrnfound = 1;
		document.getElementById('4ron').remove();
		if(oladfound==1 && khomusfound==0) {
			document.getElementById('4khol').innerHTML = "<s>чороон</s><br>хомус</br><s>оладьи</s>";
		}
		if(oladfound==0 && khomusfound==0) {
			document.getElementById('4khol').innerHTML = "<s>чороон</s><br>хомус</br>оладьи";
		}
		if(oladfound==0 && khomusfound==1) {
			document.getElementById('4khol').innerHTML = "<s>чороон</s><br><s>хомус</s></br>оладьи";
		}
		if(oladfound==1 && khomusfound==1) {
			document.getElementById('end').style.display='block';
			document.getElementById('4khol').style.display='none';
			document.getElementById('find').style.display='none';
			document.getElementById('restart').style.display='block';
		}
	}
	function minuskhms()
	{
		khomusfound = 1;
		document.getElementById('khomus').remove();
		if(chrnfound==1 && oladfound==0) {
			document.getElementById('4khol').innerHTML = "<s>чороон</s><br><s>хомус</s></br>оладьи";
		}
		if(chrnfound==0 && oladfound==0) {
			document.getElementById('4khol').innerHTML = "чороон<br><s>хомус</s></br>оладьи";
		}
		if(chrnfound==0 && oladfound==1) {
			document.getElementById('4khol').innerHTML = "чороон<br><s>хомус</s></br><s>оладьи</s>";
		}
		if(chrnfound==1 && oladfound==1) {
			document.getElementById('end').style.display='block';
			document.getElementById('4khol').style.display='none';
			document.getElementById('find').style.display='none';
			document.getElementById('restart').style.display='block';
		}
	}