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


function display_cricle_icon(obj)
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

function no_display_cricle_icon(obj)
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

/*function handleEventMouseEnterGalleryImage00000000000000(obj)
{

	var galleryImageScroll = document.getElementById("images_6_1_up_left_img");
	var intervalSlideIcon = setInterval(frame, 10);
	var t = 180;
    function frame() {
  	if ( t == 0) {
      clearInterval(intervalSlideIcon);
    } else {
	      t--;
	      galleryImageScroll.style.marginRight = t + "px";
    }
  }
  obj.onmouseleave = function () {
  	  clearInterval(intervalSlideIcon);
  	  	galleryImageScroll.style.marginRight = '180px'
  }
}*/



/*function handleEventMouseEnterGalleryImage(obj)
{
	var elem = obj
	var img = elem.getElementsByClassName('move_image_left')[0];
	var push = 0;
	var moveIcon = setInterval(frame,0.000003);
	var t = -50;
	function frame()
	{
		if( t == 100 || push == 1)
		{
			push = 1;
			clearInterval(moveIcon);
		}else{
			t++;
			img.style.left = t + "px";
		}
	}																																																																																																																																																																																																									
	
	obj.onmouseleave = function()
	{
		var moveIcon = setInterval(frame,0);
		var t = 100;
		function frame()
		{
			if( t == -50 || push == 0)
			{
				push == 0;
				clearInterval(moveIcon);
			}else{
				t--;
				img.style.left = t + "px";
			}
		}
	}

}
*/

function handleEventMouseEnterGalleryImage(obj)
{

var elem = obj;
var img_left = elem.querySelector('.move_image_left');
var img_right = elem.querySelector('.move_image_right');
var note_image = elem.querySelector('.Note_Image');
var overlay = elem.querySelector('.overlay');

var player_img_left = img_left.animate([
  {left: '-50px'},
  {left: '100px'}
], 130);
player_img_left.addEventListener('finish', function() {
  img_left.style.left = '100px';
});

var player_img_right = img_right.animate([
  {left: '252px'},
  {left: '100px'}
], 130);
player_img_right.addEventListener('finish', function() {
  img_right.style.left = '100px';
});

var player_container = note_image.animate([  
  {display: 'none'},
  {display: 'block'}
], 130);
player_container.addEventListener('finish', function() {
  note_image.style.display = 'block';  
});

var player_overlay = overlay.animate([
  {background: 'inherit'},
  {background: '#5ac1ca'}
], 130);
player_overlay.addEventListener('finish', function() {
  overlay.style.background = '#5ac1ca';
});



	obj.onmouseleave = function(){
		var player_img_left = img_left.animate([
			{left: '100px'},
			{left: '-50px'}
			], 130);
		player_img_left.addEventListener('finish', function() {
			img_left.style.left = '-50px';
		});

		var player_img_right = img_right.animate([
			{left: '100px'},
			{left: '252px'}
			], 130);
		player_img_right.addEventListener('finish', function() {
			img_right.style.left = '252px';
		});

		var player_container = note_image.animate([  
			{display: 'none'}
			], 130);
		player_container.addEventListener('finish', function() {
			note_image.style.display = 'none';  
		});

		var player_overlay = overlay.animate([
			{background: '#5ac1ca'},
			{background: 'inherit'}
			], 130);
		player_overlay.addEventListener('finish', function() {
			overlay.style.background = 'inherit';
		});

	}

}

function transform_color_button(obj)
{

	obj.style.background = 'black';
	 obj.style.border =  '1px black solid';

	 obj.onmouseleave = function()
	 {
		obj.style.background = 'rgb(90, 193, 202)';
	 	obj.style.border =  '1px rgb(90, 193, 202) solid';	 	
	 }
}

function transform_color_word(obj)
{
	obj.style.color = "#77777d";
	 obj.onmouseleave = function()
	 {
		obj.style.color = 'rgb(90, 193, 202)';	
	 }
}

function transform_color_link_twitter(obj)
{
	obj.style.background = 'rgb(90, 193, 202)';
	 obj.onmouseleave = function()
	 {
		obj.style.background = '#4e4e4e';
	 }
}


function transform_color_link_facebook(obj)
{
	obj.style.background = '#4c618c';
	 obj.onmouseleave = function()
	 {
		obj.style.background = '#4e4e4e';
	 }
}

function transform_color_link_dribbble(obj)
{
	obj.style.background = '#e23bb1';
	 obj.onmouseleave = function()
	 {
		obj.style.background = '#4e4e4e';
	 }
}


function transform_color_link_vimeo(obj)
{
	obj.style.background = '#6a91f9';
	 obj.onmouseleave = function()
	 {
		obj.style.background = '#4e4e4e';
	 }
}


function transform_color_link_youtube(obj)
{
	obj.style.background = '#4c618c';
	 obj.onmouseleave = function()
	 {
		obj.style.background = '#4e4e4e';
	 }
}

function transform_color_link_rss(obj)
{
	obj.style.background = '#fe9900';
	 obj.onmouseleave = function()
	 {
		obj.style.background = '#4e4e4e';
	 }
}


function overlay_for_image_projects(obj)
{
	obj.style.opacity = "0.8";
	 obj.onmouseleave = function()
	 {
		obj.style.opacity = "0";
	 }
}

function change_backgroundcolor_buynow(obj)
{
	obj.style.background = "#5ac1ca";
	obj.onmouseleave = function()
	{
		obj.style.background = "#000";
	}
}