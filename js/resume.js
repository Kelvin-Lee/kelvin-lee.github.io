
var jq_body = $('body'),
    jq_grid = $('#grid'),
    jq_resume = $('#resume'),
    jq_how = $('#howitsdone'),
    is_peeled_off = false;


var postit = (function(){

    return {

	aIn: function(t){
            jq_how.stop().animate({           /* 1 */
                'top': '150px',
                'left': '-150px'
            } , {
                duration: t,
                queue: false,
	        easing: 'easeOutCubic'
            });
	},

        aOut: function(t){
            jq_how.stop(t).animate({           /* 1 */
                'top': '-350px',
                'left': '-250px'
            } , {
                duration: t,
                queue: false,
                easing: 'easeInQuint' 
            });
	}

    }

})();


var ddogear = (function(){ 

    var jq_dogear = $('#dogear');

    return {

        aIn: function(w, h, t){
            jq_dogear.stop().animate({
                'border-right-width': w, //s_dogear_neww
                'border-top-width': h    //s_dogear_newh
            } , {
                duration: t,
                queue: false,
	        easing: 'easeInOutExpo'
            });
	},
  
        aOut: function(t){
            jq_dogear.stop().animate({ 
                'border-right-width': '80px',
                'border-top-width': '80px' 
            } , {
                duration: t,
                queue: false,
	        easing: 'easeInOutExpo'
            });
	},

    }

})();

$(document).ready(function (){

    $('#dogear').click(function (){

        if (is_peeled_off) {
            AniOut();
	    is_peeled_off = false;
        } else {
            peeloff();
	    is_peeled_off = true;
        }
    });

    $('.lang').prepend('<div></div>');
    $('.tool').prepend('<div></div>');
    $('.misc').prepend('<div></div>');
});

function AniOut(){

       var ani_time = 1500;

       // Reset fold
       ddogear.aOut(ani_time);
       postit.aOut(ani_time);

       // Reducing
       jq_grid.stop().animate({           /* 1 */
           'height': '80px',
           'width' : '80px' 
       }, {
           duration: ani_time,
           queue: false,
	   easing: 'easeInOutExpo',
	   complete: function() {           /* 1 */
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
       ddogear.aIn(s_dogear_neww, s_dogear_newh, ani_time);

       // Expanding
       jq_grid.stop().animate({           /* 1 */
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

	       jq_resume.stop().animate({           /* 1 */
                   'opacity': '0.5'
               }, {
                   duration: ani_time,
                   queue: false,
		   easing: 'swing'
               });

               postit.aIn(ani_time); 

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

