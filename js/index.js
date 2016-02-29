(function(window, document, $){

  $(".more-bar").on("click", "button", function(){
    console.log("lol");
    $("#more-experiences").slideToggle(400);
  });

})(window, document, $);
