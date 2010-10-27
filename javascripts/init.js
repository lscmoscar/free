$(document).ready(function() {

    $("div.section-wrap").lazyload({
	effect : "fadeIn"
    });
    
    $.localScroll({ offset: {top:-20}, hash: true}); //scrollto
    
    $('div.meta-wrapper').click(function() { // artists accordion
	//var NewLink = $(this).attr("link");
//	alert($(this).children('.meta').text());
	//window.location.href = $(this).next();
	$(this).next().slideDown().toggle();
	return true;
    }).next().hide();
    
    $('.meta-wrapper img').hover(function() {  // hover stuff for artists accordion
	$(this).next().fadeIn('slow').css('color', '#f00');	
    }, function() {
 	$(this).next().fadeIn('slow').css('color', '#454545');  	
    }); 
    
    $('.essay-meta').hover(function() { // essays hover
	$('h3', this).fadeIn('slow').css('color', '#f00');
    }, function() {
 	$('h3', this).fadeIn('slow').css('color', '#454545');  	
    });
    
    $('.essay-meta').click(function() { // essays accordion
	$(this).next().slideDown().toggle();
	return false;
    }).next().show(); // this allows for the essay to close, although will initially show it open
    
    $('div.essays img.closer').click(function() { // closer link, specific to the essays. note that the difference betweeen this function and the one below it is the offset
	$(this).parent().slideUp(1000);
	$.scrollTo($(this).parent(), 500, {offset:-300});
    });
    
    $('div.artists-content img.closer').click(function() { // closer link for artists section
	$(this).parent().slideUp(1000);
	$.scrollTo($(this).parent(), 500, {offset:-100});
    });    
    
    $(function() {
	$(".clipboard").each(function() {
            //Create a new clipboard client
            var clip = new ZeroClipboard.Client();
	    
	    var title = $(this);
	              
            clip.glue(title[0]);
	              
            var txt = $(this).attr('title');
            clip.setText(txt);
	              
            clip.addEventListener('complete', function(client, text) {	    
		//Add a complete event to let the user know the text was copied
            });
	    
	    clip.addEventListener('onMouseOver', function () {
		$('li#clipboard-alert').html('Copy to clipboard?').fadeIn('slow');	
	    });
	    
	    clip.addEventListener('onMouseOut', function() {
		$('li#clipboard-alert').fadeOut('fast');	
	    });

	    clip.addEventListener('onMouseDown', function() {
		$('li#clipboard-alert').css('display', 'none');
		$('li#clipboard-alert').fadeIn('slow').html('Permalink copied to clipboard.').delay(800).fadeOut('slow');
	    });

	});
    });
});