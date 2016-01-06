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

function makeSquare(n)
{
    var strA = "<div class = 'mypx "

    for (var i = 1; i <= n*n; i++)
    {
    	var isTop = (i <= n);
	var isBottom = (i > n * (n-1));
	var isLSide = (i % n == 1)
	var isRSide = (i % n == 0)

        var strB = ""
	var strC  = "' id = '" + i + "'>" + i + "</div>"

    	if (isTop || isBottom || isLSide || isRSide)
	{
            strB = "outer ";
            strC  = "' id = '" + i + "'>" + i + strB + "</div>"
	}

	else
	{
            strB += "inner "
            strC  = "' id = '" + i + "'>" + i + strB + "</div>"
	}

	if (isTop)
	{
	    strB += "top ";
            strC  = "' id = '" + i + "'>" + i + strB + "</div>"
	}

	if (isBottom)
	{
            strB += "bottom ";
            strC  = "' id = '" + i + "'>" + i + strB + "</div>"
	}


        $('#bigbox').append(strA + strB + strC);
    }

    $(".mypx").css( "width", "50px");
    $(".mypx").css("height", "50px");


    var dim = n * 52 + "px";
    console.log(dim);
    $('#bigbox').css( "width", dim);
    $('#bigbox').css("height", dim);


};

makeSquare(15);
