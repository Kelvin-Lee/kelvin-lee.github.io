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

        $('.mypx').css("background-color", "#FFFFFF");
        // Grey stack container
	$(getNumbers([stackcontainer])).css("background-color", "#444444");
        
	$(getNumbers([stacklayers])).css("background-color", "orange");
        
	$(getNumbers([rect(143, 4 , 2)])).css("background-color", "orange");
        $(getNumbers([rect(167, 4, 2)])).css("background-color", "orange");
        $(getNumbers([rect(191, 4, 2)])).css("background-color", "orange");
        $(getNumbers([rect(215, 4, 2)])).css("background-color", "orange");

        $(getNumbers([rect(27, 3, 2)])).css("background-color", "orange");
        $(getNumbers([rect(70, 3, 2)])).css("background-color", "orange");
        $(getNumbers([rect(113, 3, 2)])).css("background-color", "orange");
        $(getNumbers([rect(156, 3, 2)])).css("background-color", "orange");
    });

    $('#LIhover').mouseover(function()
    {
        $('.mypx').css("background-color", "#0077B5");
        $(getNumbers(li_initials())).css("background-color", "white");
	$(getNumbers([li_details])).css("background-color", "#0077B5");


    });

    $('#GHhover').mouseover(function()
    {
        $('.mypx').css("background-color", "#0D2636");
        $(getNumbers([ghtriangles()])).css("background-color", "white");

        $(getNumbers([ghears()])).css("background-color", "white");
        $(getNumbers([rect(65, 12, 9)])).css("background-color", "white ");
        $(getNumbers([rect(104, 1, 6)])).css("background-color", "white ");
        $(getNumbers([rect(117, 1, 6)])).css("background-color", "white ");
        $(getNumbers([rect(247, 8, 1)])).css("background-color", "white ");
        $(getNumbers([rect(268, 6, 6)])).css("background-color", "white ");
        $(getNumbers([rect(305, 3, 1)])).css("background-color", "white ");
        $(getNumbers([rect(284, 1, 1)])).css("background-color", "white ");
        $(getNumbers([rect(262, 2, 1)])).css("background-color", "white ");
	$('#268, #273').css("background-color", "#0D2636");

    });




});

function ghtriangles()
{
    var nums = [1, 2, 3, 4, 5, 21, 22, 23, 41, 42, 61, 81, 16, 17, 18, 19, 20, 38, 39, 40, 59, 60, 80, 100, 301, 321, 341, 342, 361, 362, 363, 381, 382, 383, 384, 385, 320, 340, 359, 360, 378, 379, 380, 396, 397, 398, 399, 400];

    return function(i)
    {
       return nums.includes(i);
    }
}

function ghears()
{
    var nums = [26, 46, 47, 
    35, 54, 55];
    return function(i)
    {
        return nums.includes(i);
    }

}

function li_initials()
{
    var foos = Array();
    foos.push(rect(43, 3, 3));
    foos.push(rect(123,3,12));
    foos.push(rect(128,3,12));
    foos.push(rect(176,3,10));
    foos.push(rect(128,11,4));
    return foos;

}

function li_details(i)
{
        var nums = [131, 137, 138, 158, 192, 193, 194];
        if (nums.includes(i))
	{
	 return true;
	}
	else
	{

	return false;
	}
}


// Returns an array of functions that can be called to evaluate
// whether a given i is within the rectangle specified by the arguments
// to rect()
function rect(anchor, dimx, dimy)
{
   var row_of_anchor = Math.ceil(anchor / PXSIDE);
   var col_of_anchor = (anchor % PXSIDE) ? (anchor % PXSIDE) : (PXSIDE);  

   var rows = Array(); 
   var cols = Array();
   for (var a = 0; a < dimy; a++)
   {
       rows.push(rowt(row_of_anchor + a));
   }

   for (var b = 0; b < dimx; b++)
   {
       cols.push(coll(col_of_anchor + b));
   }

   return function(i)
   {
       for (var j = 0; j < rows.length; j++)
       {
           for (var k = 0; k < cols.length; k++)
	   {
               if (rows[j](i) && cols[k](i))
               {
                   return true;
               }
	   }
       }
   }

}


// Function that returns a bool to evaluate whether a pixel of number i
// is part of the stack container graphic.
function stackcontainer(i)
{
    var isSideWall = (coll(1)(i) || colr(1)(i)) && (i > PXSIDE * Math.round(PXSIDE / 2 )) 
    var isBottom   = rowb(1)(i);
    return (isSideWall || isBottom);
}

// Function that returns a bool to evaluate whether a pixel of number i
// is part of the stack layer graphic.
function stacklayers(i)
{
    var layer1 = ( rowb(3)(i) || rowb(4)(i) ) && !(coll(1)(i) || coll(2)(i) || colr(1)(i) || colr(2)(i));
  
  {
      var bend1_1 =  rowb(7)(i) && !(coll(1)(i) || coll(2)(i) || colr(1)(i) || colr(2)(i));
      var bend1_2   = rowb(8)(i) && i % PXSIDE > coll(2)() && i % PXSIDE < coll(Math.round(PXSIDE/2))();
      var bend1_3 = rowb(6)(i) && i % PXSIDE < colr(2)() && i % PXSIDE >= coll(Math.round(PXSIDE/2))();
      var bend1 = (bend1_1 || bend1_2 || bend1_3);
  }

  {
  }

  return layer1 || bend1;
}

// Select nth row from top (1 = first)
// Returns a bool if i is given and within the nth row from top
// Else, returns a integer of the last cell in row n
function rowt(n)
{
    return function(i)
    {
        if (i)
	{
            return (PXSIDE * (n - 1) + 1 <= i &&  i <= n * PXSIDE);
	}
	else
	{
            return (n * PXSIDE);
	}
    }
}

// Select nth row from bottom (1 = bottom)
// Returns a bool if i is given and within the nth row from bottom
// Else, returns a integer of the last cell in row n
function rowb(n)
{
    return function(i)
    {
        if (i)
	{
            return (PXSIDE * (PXSIDE - n) + 1 <= i &&  i <= (PXSIDE - (n-1))  * PXSIDE);
	}
	else
	{
            return (PXSIDE - (n-1)) * PXSIDE;
	}
    }
}

// Select nth col from left (1 = left-most)
// Returns a bool if i is given and within the nth col from left
// Else, returns the column number as an integer
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
// Returns a bool if i is given and within the nth col from right
// Else, returns the column number as an integer
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


// Outputs string of css id selectors in the form '#' + INTEGER,
// dependent on the functions provided to it.
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

// Produces a square of pixels of size n x n
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
	//var strC  = "' id = '" + i + "'>" +  i + "</div>"
	var strC  = "' id = '" + i + "'>" + "</div>"

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

