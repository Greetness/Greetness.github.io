window.onload=function(){
	var ul = document.getElementById("dot");
	var lis = ul.getElementsByTagName("li");
	var pic = document.getElementById("pic");
	var before = document.getElementById("before");
	var next = document.getElementById("next");
	var hide = document.getElementById("hide");
	for(var i = 0;i<lis.length; i++){
		lis[i].value = i;
		lis[i].onclick=function(){
			pic.src = "img/" + this.value + ".jpg";
			for(var j=0; j<lis.length; j++){
				lis[j].innerHTML = "○";
			}
			lis[this.value].innerHTML = "●";
		}
	}
	before.onmouseover = function(){
		this.style["background"]="rgba(0,0,0,0.1)";
		
	}
	before.onmouseout = function(){
		this.style["background"]="";
		
	}
	next.onmouseover = function(){
		this.style["background"]="rgba(0,0,0,0.1)";
		
	}
	next.onmouseout = function(){
		this.style["background"]="";
		
	}
	before.onclick= function(){
		var i = hide.value;
		for(var j=0; j<lis.length; j++){
				lis[j].innerHTML = "○";
		}
		i--;
		i+=4;
		i = i%4;
		pic.src = "img/" + i + ".jpg";
		lis[i].innerHTML = "●";
		hide.value = i;
	}
	next.onclick= function(){
		var i = hide.value;
		for(var j=0; j<lis.length; j++){
				lis[j].innerHTML = "○";
		}
		i++;
		i = i%4;
		pic.src = "img/" + i + ".jpg";
		lis[i].innerHTML = "●";
		hide.value = i;
	}
	movePic();
}

	
//图片的定时轮播并且更改dot
function movePic(){
	var i = 0;
	var ul = document.getElementById("dot");
	var lis = ul.getElementsByTagName("li");
	var hide = document.getElementById("hide");
	var time = setInterval(function(){
		var pic = document.getElementById("pic");
		i = hide.value;
		i++;
		i = i%4;
		pic.src = "img/" + i + ".jpg";
		hide.value = i;
		for(var j=0; j<lis.length; j++){
				lis[j].innerHTML = "○";
		}
		lis[i].innerHTML = "●";								
	},3000);
}
