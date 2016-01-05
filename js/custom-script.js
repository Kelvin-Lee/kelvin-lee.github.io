$(document).ready(function(){

    $('#tog').click(function(){
        $(".mypx").html('');
    });

    $('#SOhover').mouseover(function()
    {
    $(".outer").css("background-color", "#888888");
    $(".top").css("background-color", "inherit");
    $(" #2,  #3,  #4,  #5").css("background-color", "#FFA500");
    //$(" #8,  #9, #10, #11").css("background-color", "#E0B050");
    $(" #8,  #9, #10, #11").css("background-color", "inherit");
    $("#14, #15, #16, #17").css("background-color", "#C58950");
    $("#20, #21, #22, #23").css("background-color", "#787878");
    $("#26, #27, #28, #29").css("background-color", "#505050");
    
    
    });

    $('#cornerhover').mouseover(function()
    {
console.log('#cornerhover');
    });

    $('#boxhover').mouseover(function()
    {
console.log('#boxhover');
    });
    
    $('#innerhover').mouseover(function()
    {
console.log('#innerhover');
    });
});

function toggleNonWork()
{
    var button = document.getElementById("non-work");
    var current = button.innerHTML;
    
    if (current == primaryNonWorkString)
    {
        button.innerHTML = secondaryNonWorkString;
	secondaryDisplay.style.display = "block";
	primaryDisplay.style.display = "none";
    }

    if (current == secondaryNonWorkString)
    {
        button.innerHTML = primaryNonWorkString;
	primaryDisplay.style.display = "block"
	secondaryDisplay.style.display = "none";
    }

    /* EXCEPTION HANDLER should go here */
}//toggleNonWork

