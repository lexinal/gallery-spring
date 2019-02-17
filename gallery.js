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

	// Change to Next Image When User Clicks
  	$('#next').on('click', function(){

  	$('#im' + currentImage).stop().fadeOut(1);
  	increaseImage();
  	$('#im' + currentImage).stop().fadeIn(1);
  });

  	//increasing currentImage by 1 and re-setting
  	function increaseImage() {
  		++currentImage;
  		if(currentImage > totalImages) {
  			currentImage = 1;
  		}
  	}
  	// decreasing currentImage by 1 and then re-setting
  	--currentImage
  	if(currentImage < 1){
  		currentImage = totalImages;
  		}
  	}

	




  	