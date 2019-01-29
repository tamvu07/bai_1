window.onload=function(){


};



var labelText = document.getElementById('change-red-color-on-click');
	labelText.onclick = function() {
		var labelChange = document.getElementById('title-change-color-trigger');
		labelChange.style.color = 'red';
	}



function display_block_1() {   
document.getElementById("icon-introduction-feature-homepage-item-img-1-cricle").style.display = 'block';
myMove_1(1);
}

function display_none_1() {
document.getElementById("icon-introduction-feature-homepage-item-img-1-cricle").style.display = 'none';
}


function display_block_2() {   
document.getElementById("icon-introduction-feature-homepage-item-img-2-cricle").style.display = 'block';
myMove_1(2);
}

function display_none_2() {
document.getElementById("icon-introduction-feature-homepage-item-img-2-cricle").style.display = 'none';
}

function display_block_3() {   
document.getElementById("icon-introduction-feature-homepage-item-img-3-cricle").style.display = 'block';
myMove_1(3);
}

function display_none_3() {
document.getElementById("icon-introduction-feature-homepage-item-img-3-cricle").style.display = 'none';
}

function myMove_1(id) {
  var elem = document.getElementById("icon-introduction-feature-homepage-item-img-"+id+"-cricle");   
  var pos = 0;
  var t = 10;
  var id = setInterval(frame, 20);
  function frame() {
  	if (pos == 10 && t == 0) {
      clearInterval(id);
    } else {
	      pos++; 
	      t--;
      elem.style.margin = t + "px"; 
      elem.style.padding = pos + "px"; 
    }

  }
}


function img_show_zoom(obj)
{

	var elem = obj
	var img = elem.getElementsByClassName('images_one_row_displaynone_img')[0];
	elem.style.border = '4px #5ac1ca solid';
	var pos = 0;
	var t = 5;
	var t1 = 0;
	var id = setInterval(frame, 30);
	function frame() {
		if (pos == 5 && t == 0 && t1 == -5) {
			clearInterval(id);
		} else {
			pos++; 
			t--;
			t1--;
			elem.style.margin = t + "px"; 
			elem.style.padding = pos + "px"; 

			img.style.margin = t1 + "px";
			img.style.padding = pos + "px";
		}

	}
}	

function img_dis_show_zoom(obj)
{
	var elem = obj; 
	var img = elem.getElementsByClassName('images_one_row_displaynone_img')[0];
	
	
	var pos = 5;
	var t = 0;
	var t1 = -5;
	var id = setInterval(frame, 30);
	function frame() {
		if (pos == 0 && t == 5 && t1 == 0) {
			clearInterval(id);
			elem.style.border = '0px #5ac1ca solid';
		} else {
			pos--; 
			t++;
			t1++;
			elem.style.margin = t + "px"; 
			elem.style.padding = pos + "px"; 

			img.style.margin = t1 + "px";
			img.style.padding = pos + "px";
		}

	}
}

function images_6_1()
{
	alert("ok");
	var i1 = document.getElementById("images_6_1_up_left_img");
	  var id = setInterval(frame, 20);
	  var t = 50;
  function frame() {
  	if ( t == 0) {
      clearInterval(id);
    } else {
	      t--;
	      i1.style.margin-right = t + "px";
    }

  }
}

