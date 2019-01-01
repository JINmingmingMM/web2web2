//点击切换图片，放大镜
var thr10 = document.getElementById("thr10");
var th1 = document.getElementById("th1");
var th2 = document.getElementById("th2");
var th3 = document.getElementById("th3");
var th4 = document.getElementById("th4");

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var slider = document.getElementById("slider");
var Bimg = document.getElementById("Bimg");
var box = document.getElementById('box');
th1.onclick=function(){
	thr10.setAttribute("src","../img/pp0.jpeg");
	Bimg.setAttribute("src","../img/pp0.jpeg");
}
th2.onclick=function(){
	thr10.setAttribute("src","../img/pp0.jpeg");
	Bimg.setAttribute("src","../img/pp0.jpeg");
}
th3.onclick=function(){
	thr10.setAttribute("src","../img/pp1.jpeg");
	Bimg.setAttribute("src","../img/pp1.jpeg");
}
th4.onclick=function(){
	thr10.setAttribute("src","../img/pp1.jpeg");
	Bimg.setAttribute("src","../img/pp1.jpeg");
}

img1.onmouseover = function () {
	slider.style.display = 'block';
	img2.style.display = 'block';
}
img1.onmouseout = function () {
	slider.style.display = 'none';
	img2.style.display = 'none';
}

img1.onmousemove = function (ev) {
	var ev = ev || window.event;
	var Top = document.documentElement.scrollTop || document.body.scrollTop;
	var oL = ev.clientX - box.offsetLeft - slider.offsetWidth / 2;
	var oT = ev.clientY +Top- box.offsetTop - slider.offsetHeight / 2;
	var oMaxw = img1.offsetWidth - slider.offsetWidth;
	var oMaxh = img1.offsetHeight - slider.offsetHeight;

	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

	slider.style.left = oL + 'px';
	slider.style.top = oT + 'px';

	var scale = img2.offsetWidth / slider.offsetWidth;
	Bimg.style.left = -scale * oL + 'px'
	Bimg.style.top = -scale * oT + 'px'
}




var mlaa = document.getElementById("mlaa");
var mlai = document.getElementById("mlai");
var mlbb = document.getElementById("mlbb");
var mlbi = document.getElementById("mlbi");
var mlcc = document.getElementById("mlcc");
mlbb.onclick=function(){
	mlbb.style.display="none";
	mlbi.style.display="block";
	mlaa.style.display="none";
	mlai.style.display="block";
	mlcc.innerHTML='"200ml"';
}
mlai.onclick=function(){
	mlbb.style.display="block";
	mlbi.style.display="none";
	mlaa.style.display="block";
	mlai.style.display="none";
	mlcc.innerHTML='"150ml"';
}

var num1 = document.getElementById("num1");
var numcut = document.getElementById("numcut");
var numadd = document.getElementById("numadd");
numcut.onclick=function(){
	var num = num1.value;
	if(num==5){
		num1.value=4;
		numcut.style.cursor="pointer";
	}
	if(num==4){
		num1.value=3;
		numcut.style.cursor="pointer";
	}
	if(num==3){
		num1.value=2;
		numcut.style.cursor="pointer";
	}
	if(num==2){
		num1.value=1;
		numcut.style.cursor="pointer";
	}
	if(num==1){
		numcut.style.cursor="not-allowed";
	}
}
numadd.onclick=function(){
	var num = parseInt(num1.value);
	if(num==5){
		numadd.style.cursor="not-allowed";
	}
	if(num==4){
		num1.value=5;
		numadd.style.cursor="pointer";
	}
	if(num==3){
		num1.value=4;
		numadd.style.cursor="pointer";
	}
	if(num==2){
		num1.value=3;
		numadd.style.cursor="pointer";
	}
	if(num==1){
		num1.value=2;
		numadd.style.cursor="pointer";
	}
}
num1.onchange=function(){
	var num0 = parseInt(num1.value);
	if(num0>5){
		num1.value=5;
	}
	if(num0<1){
		num1.value=1;
	}
	console.log(num1.value);
}



//点击加入购物车
var click = document.getElementById("click");
var click0 = document.getElementById("click0");
var cha = document.getElementById("cha");
var white0 = document.getElementById("white0");
var con = document.getElementById("con");
click.onclick=function(){
	click0.style.display="block";
}
cha.onclick=function(){
	click0.style.display="none";
}
con.onclick=function(){
	click0.style.display="none";
}