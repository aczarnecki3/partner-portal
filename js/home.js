function showMenu() {
		$("#mobile-menu").toggleClass('slide');
	}




$(function() {               

$("#hamburger").click(showMenu);
$("#main").parallax({imageSrc: 'images/hero.png'});
$("h1").fadeIn(1500);


;
});




























/*

GENERAL:

- The background of the "logout" button will be a light green on hover.
- #main-buttons will change to dark blue when user hovers. 
- #main-buttons will also be the same size.
- There will be a form (potentially progressive) on the 'Submit a Lead' Page.
- Some of the in-between states are not quite mobile responsive yet. Need to improve here and decide on hero image.
- Add "Back to Home" navigation link?
- Add Contact Us or Social Images at bottom of all pages


Resource Page:

(A lot of build-out to be done here.)

- Need to create sidebar or aside with list of content types: Case Studies, Sales Tools, Videos, etc.
- Want to have a filter, where the user selects from that list and the resources that apply populate in resource blocks
- Animate resource boxes to expand, contract, fade in/out...something fun here.




*/