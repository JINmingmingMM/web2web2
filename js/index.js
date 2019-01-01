//最上边悬浮
window.onload = function(){
  var cover = document.getElementsByClassName('cover')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position = 'fixed'
		}
		else{
			cover.style.position = 'static'
		}
	}
}
//图片切换
  function getStyle(obj, attr) { //返回值带有单位px
    if (obj.currentStyle) {
      return obj.currentStyle[attr];
    } else {
      return getComputedStyle(obj, null)[attr];
    }
  }

  function animate(obj, json, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      var flag = true;
      for (var attr in json) {
        (function (attr) {
          if (attr == "opacity") {
            var now = parseInt(getStyle(obj, attr) * 100);
            var dest = json[attr] * 100;
          } else {
            var now = parseInt(getStyle(obj, attr));
            var dest = json[attr];
          }
          var speed = (dest - now) / 6;
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
          if (now != dest) {
            flag = false;
            if (attr == "opacity") {
              obj.style[attr] = (now + speed) / 100;
            } else {
              obj.style[attr] = now + speed + "px";
            }
          }
        })(attr);
      }
      if (flag) {
        clearInterval(obj.timer);
        callback && callback(); //如果回调函数存在，就调用回调函数
      }
    }, 30);
  }


//边上无缝轮播
var ul = document.getElementById("ul");
function show() {
  var top = ul.offsetTop - 1;
  ul.style.top = top + "px";

  console.log(ul.style.height);
  if (-1 * ul.offsetTop >= ul.offsetHeight / 2) {
    ul.style.top = 0;
  }
}
var t = setInterval(show, 15);

//li添加鼠标移入移出事件
var li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
//移出事件
  li[i].onmouseout = function () {
  //不能加 var
  t = setInterval(show, 15);
  };
  li[i].onmouseover = function () {
    clearInterval(t);
  };
}


//添加钱
var span = document.createElement("span");
var money = document.getElementById("money");
var qiannn = document.getElementById("qiannn");
money.onchange=function(){
  for(var i=0;i<money.length;i++){
    if(money[i].selected==true){
      var answer1=money[i].text;
    }
  }
  qiannn.appendChild(span);
  span.innerHTML="<span class='aaa'>¥</span><span class='aaa'>"+answer1+"</span>";
}

//最右边
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
img1.onmouseover=function(){
  img1.setAttribute("class","right001");
}
img1.onmouseout=function(){
  img1.setAttribute("class","right01");
}

img2.onmouseover=function(){
  img2.setAttribute("class","right002");
}
img2.onmouseout=function(){
  img2.setAttribute("class","right02");
}
    
img3.onmouseover=function(){
  img3.style.display="none";
  img33.style.display="block";
}
img33.onmouseout=function(){
  img3.style.display="block";
  img33.style.display="none";
}

img4.onmouseover=function(){
  img4.setAttribute("class","right004");
}
img4.onmouseout=function(){
  img4.setAttribute("class","right04");
}
