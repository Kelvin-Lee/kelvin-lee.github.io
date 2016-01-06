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
	}

	else
	{
            strB += "inner "
	}

	if (isTop)
	{
	    strB += "top ";
	}

	if (isBottom)
	{
            strB += "bottom ";
	}


        $('#bigbox').append(strA + strB + strC);
    }

    var pixdim = 25;
    var pixdmstr = pixdim + "px"

    $(".mypx").css( "width", pixdmstr);
    $(".mypx").css("height", pixdmstr);


    var dim = n * (pixdim + 2);
    var dimstr = dim + "px";
    console.log(dimstr);
    $('#bigbox').css( "width", dimstr);
    $('#bigbox').css("height", dimstr);


};

makeSquare(15);
