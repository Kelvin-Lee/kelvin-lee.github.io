
var jq_body = $('body'),
    jq_dogear = $('#dogear'),
    jq_grid = $('#grid'),
    jq_resume = $('#resume'),
    jq_how = $('#howitsdone'),
    jq_todo = $('#todo');
    is_peeled_off = false;


$(document).ready(function (){

    $('#dogear').click(function (){

        if (is_peeled_off) {
            reset_peel();
	    is_peeled_off = false;
        } else {
            peeloff();
	    is_peeled_off = true;
        }
    });
});

function reset_peel(){

       var ani_time = 1500;

       // Reset fold
       jq_dogear.stop().animate({
           'border-right-width': '80px',
           'border-top-width': '80px' 
       }, {
           duration: ani_time,
           queue: false,
	   easing: 'easeInOutExpo',
	   complete: function(){
	   /*
               jq_dogear.stop().animate({
                   'width': 0,
		   'height': 0
               }, {
                   duration: ani_time,
                   queue: false,
		   easing: 'linear'
               }); 
           */
           }
       });
	       
       jq_how.stop().animate({
           'top': '-350px',
           'left': '-250px'
       }, {
           duration: ani_time,
           queue: false,
           easing: 'easeInQuint'
       });

       jq_todo.stop().animate({
           'top': '-350px',
           'left': '-250px'
       }, {
           duration: ani_time,
	   queue: false,
	   easing: 'easeInQuint'
       });

	       
       // Reducing
       jq_grid.stop().animate({
           'height': '80px',
           'width' : '80px' 
       }, {
           duration: ani_time,
           queue: false,
	   easing: 'easeInOutExpo',
	   complete: function() {
               jq_resume.css({
                   'color' : 'black',       
                   'opacity': '0',
                   'z-index': '1'
               });

	       jq_resume.stop().animate({
                   'opacity': '1'
               }, {
                   duration: ani_time,
                   queue: false,
		   easing: 'swing'
               });

               jq_grid.css({
	           'z-index': '1'
               });
               // Attach an element whose size is dependent on %
               // or that is responsive.
	  }
           
       });
       
}

function peeloff()
{
       var n_bodyw,
           n_bodyh,
	   s_dogear_neww,
	   s_dogear_newh,
	   n_dogear_neww,
	   n_dogear_newh,
	   s_grid_neww,
	   s_grid_newh,
	   n_grid_neww,
	   n_grid_newh,
           ani_time = 1500;


       /* CALCULATIONS */
       // Get the body width as integer numbers of px.
       n_bodyw = parseInt(jq_body.css('width'), 10);
       n_dogear_neww = n_bodyw - 15;
       n_grid_neww = n_bodyw - 16;
       
       // Convert back to string to be used for dogear and grid widths.
       s_dogear_neww = n_dogear_neww + 'px';//TODO:Make respective to viewport
       s_grid_neww = n_grid_neww + 'px';

       // Get the body height as integer numbers of px.
       n_bodyh = parseInt(jq_body.css('height'), 10);
       n_dogear_newh = n_bodyh - 15;
       n_grid_newh = n_bodyh - 16;

       //Convert back to string to be used as dogear and grid height.
       s_dogear_newh = n_dogear_newh + 'px';//TODO:Make respective to viewport
       s_grid_newh = n_grid_newh + 'px';


       /* ANIMATION */
       // Animate the dogear 'folding', and expand the grid to match.

       // Folding
       jq_dogear.stop().animate({
           'border-right-width': s_dogear_neww,
           'border-top-width': s_dogear_newh
       }, {
           duration: ani_time,
           queue: false,
	   easing: 'easeInOutExpo',
	   complete: function(){
	   /*
               jq_dogear.stop().animate({
                   'width': 0,
		   'height': 0
               }, {
                   duration: ani_time,
                   queue: false,
		   easing: 'linear'
               }); 
           */
           }
       });

       // Expanding
       jq_grid.stop().animate({
           'height': s_grid_newh,
           'width' : s_grid_neww
       }, {
           duration: ani_time,
           queue: false,
	   easing: 'easeInOutExpo',
           complete: function() {
               jq_grid.css({'z-index': '0'}); 
               jq_resume.css({
                   'color' : 'white',       
                   'opacity': '0',
                   'z-index': '1'
               });

	       jq_resume.stop().animate({
                   'opacity': '0.5'
               }, {
                   duration: ani_time,
                   queue: false,
		   easing: 'swing'
               });

	       jq_how.stop().animate({
                   'top': '150px',
                   'left': '-150px'
               }, {
                   duration: ani_time,
                   queue: false,
		   easing: 'easeOutCubic'
               });

	       jq_todo.stop().animate({
                   'top': '350px',
                   'left': '-150px'
               }, {
                   duration: ani_time,
                   queue: false,
		   easing: 'easeOutCubic'
               });

	       var tempw = (n_grid_neww / n_bodyw) * 100;
	       console.log(tempw);
	       var s_tempw = tempw + "%";

	       var temph = (n_grid_newh/ n_bodyh) * 100;
	       console.log(temph);
	       var s_temph = temph + "%";

               // Reassign the #grid's css properties to % of the body
	       // This enables it to be responsive to resizing.
	       jq_grid.css({
	           'width': s_tempw,
		   'height': s_temph
               });

           }
       });



}

