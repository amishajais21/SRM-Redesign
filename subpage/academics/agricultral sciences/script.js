// jQuery.
$(function() {
	// Reference the tab links.
	const tabLinks = $('#tab-links li a');
	
	// Handle link clicks.
	tabLinks.click(function(event) {
		var $this = $(this);
		
		// Prevent default click behaviour.
		event.preventDefault();
		
		// Remove the active class from the active link and section.
		$('#tab-links a.active, section.active').removeClass('active');
		
		// Add the active class to the current link and corresponding section.
		$this.addClass('active');
		$($this.attr('href')).addClass('active');
	});
});