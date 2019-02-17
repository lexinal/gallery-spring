// document ready function
$(document).ready(() => {
	//define your variables 
	var currentImage = 1
	var totalImages = 3;
	
	// Change for Previous Image When User Clicks
	$('#previous').on('click', function(){

	$('#im_' + currentImage).stop().fadeOut(1);
    decreaseImage();

    $('#im_' + currentImage).stop().fadeIn(1);
  }); 

  	