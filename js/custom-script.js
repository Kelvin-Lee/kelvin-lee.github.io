var PXSIDE = 20;
var TOTALPX  = PXSIDE * PXSIDE

$(document).ready(function()
{

    makeSquare(PXSIDE);

    $('#tog').click(function(){
        $(".mypx").html('');
    });

    $('#SOhover').mouseover(function()
    {

        // Grey stack container
	$(getNumbers([stackcontainer, stacklayers])).css("background-color", "#444444");

	// 2 flat orange stack frames
//        $(getNumbers([stacklayers])).css("background-color", "orange");

        

    });


});

function stackcontainer(i)
{
    var isSideWall = (coll(1)(i) || colr(1)(i)) && (i > PXSIDE * Math.round(PXSIDE / 2 )) 
    var isBottom   = rowb(1)(i);
    return (isSideWall || isBottom);
}

function stacklayers(i)
{
    var layer1 = ( rowb(3)(i) || rowb(4)(i) ) && !(coll(1)(i) || coll(2)(i) || colr(1)(i) || colr(2)(i));
  var cont =  rowb(7)(i) && !(coll(1)(i) || coll(2)(i) || colr(1)(i) || colr(2)(i));
  var bendup   = rowb(8)(i) && i % PXSIDE > coll(2)() && i % PXSIDE < coll(Math.round(PXSIDE/2))();
  var benddown = rowb(6)(i) && i % PXSIDE < colr(2)() && i % PXSIDE >= coll(Math.round(PXSIDE/2))();
  return layer1 || cont || bendup || benddown;
}

// Select nth row from top (1 = first)
function rowt(n)
{
    return function(i)
    {
        return (PXSIDE * (n - 1) + 1 <= i &&  i <= n * PXSIDE);
    }
}

// Select nth row from bottom (1 = bottom)
function rowb(n)
{
    return function(i)
    {
        return (PXSIDE * (PXSIDE - n) + 1 <= i &&  i <= (PXSIDE - (n-1))  * PXSIDE);
    }
}

// Select nth col from left (1 = left-most)
function coll(n)
{
    return function(i)
    {
        if (i)
	{
            return (i % PXSIDE == n);
	}
	else
	{
	    return n ;
	}
    }
}

// Select nth col from right (1 = right-most)
function colr(n)
{
    return function(i)
    {
        if (i)
	{
        // % does not return the modulus when remainder is 0,
	// so we need to make the righthand expression 'interesting'
            return (i % PXSIDE == (PXSIDE - (n - 1)) % PXSIDE);
	}
	else
	{
	   return (PXSIDE - (n-1) % PXSIDE);
	}
    }
}



function getNumbers(a_foo)
{ 
    var upbound = TOTALPX;
    var s_str = "";
    for (var i = 1; i <= upbound; i++)
    {
        for (var j = 0; j < a_foo.length; j++)
	{
            if (a_foo[j](i))
	    {
                s_str += ",#" + i;
		break;
	    }
	}
    }

    // Remove up to the second char in the string (zero-based).
    s_str = s_str.slice(1);

    return s_str;
}

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
	var strC  = "' id = '" + i + "'>" +  i + "</div>"
	//var strC  = "' id = '" + i + "'>" + "</div>"

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
    $('#bigbox').css( "width", dimstr);
    $('#bigbox').css("height", dimstr);


};

