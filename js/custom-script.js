var PXSIDE = 20;
var TOTALPX  = PXSIDE * PXSIDE

$(document).ready(function()
{

    makeSquare(PXSIDE);

    $('#bigbox').append('<div id = "caption" style = "color: white; font-family: Courier; font-size: 25px;"> <p> C:\\kelvinlee> Hello World! </p> </div>');
    $('#caption').append('<div id = "mylinks"> <a id = "SOhover" href = "http://stackoverflow.com/users/5455994/kelvin-lee?tab=profile">StackOverflow</a><a id = "LIhover" href = "https://www.linkedin.com/in/kelvinklee93"> LinkedIn </a><a href = "http://github.com/kelvin-lee" id = "GHhover"> GitHub </a></div>');
    $('#SOhover').mouseover(function()
    {
        //$('.mypx').css("background-color", "#444444");
        $('.mypx').stop().css("background-color", "#444444");
        $("#27,#28,#29,#47,#48,#49,#70,#71,#72,#90,#91,#92,#113,#114,#115,#133,#134,#135,#143,#144,#145,#146,#156,#157,#158,#163,#164,#165,#166,#167,#168,#169,#170,#176,#177,#178,#187,#188,#189,#190,#191,#192,#193,#194,#211,#212,#213,#214,#215,#216,#217,#218,#235,#236,#237,#238,#243,#244,#245,#246,#247,#248,#249,#263,#264,#265,#266,#267,#268,#269,#270,#271,#272,#273,#274,#275,#276,#277,#278,#290,#291,#292,#293,#294,#295,#296,#297,#298,#323,#324,#325,#326,#327,#328,#329,#330,#331,#332,#333,#334,#335,#336,#337,#338,#343,#344,#345,#346,#347,#348,#349,#350,#351,#352,#353,#354,#355,#356,#357,#358").stop().animate({backgroundColor: "orange"}, {duration: 500, queue: false});

    });

    $('#LIhover').mouseover(function()
    {
        $('.mypx').stop().css("background-color", "#0077B5");
        $("#43,#44,#45,#63,#64,#65,#83,#84,#85,#123,#124,#125,#128,#129,#130,#132,#133,#134,#135,#136,#143,#144,#145,#148,#149,#150,#151,#152,#153,#154,#155,#156,#157,#163,#164,#165,#168,#169,#170,#171,#172,#173,#174,#175,#176,#177,#178,#183,#184,#185,#188,#189,#190,#191,#195,#196,#197,#198,#203,#204,#205,#208,#209,#210,#216,#217,#218,#223,#224,#225,#228,#229,#230,#236,#237,#238,#243,#244,#245,#248,#249,#250,#256,#257,#258,#263,#264,#265,#268,#269,#270,#276,#277,#278,#283,#284,#285,#288,#289,#290,#296,#297,#298,#303,#304,#305,#308,#309,#310,#316,#317,#318,#323,#324,#325,#328,#329,#330,#336,#337,#338,#343,#344,#345,#348,#349,#350,#356,#357,#358").stop().animate({backgroundColor: "white"}, {duration: 500, queue: false});
    });

    $('#GHhover').mouseover(function()
    {
        $('.mypx').stop().css("background-color", "#0D2636");

$("#26,#35,#46,#47,#54,#55,#65,#66,#67,#68,#69,#70,#71,#72,#73,#74,#75,#76,#85,#86,#87,#88,#89,#90,#91,#92,#93,#94,#95,#96,#104,#105,#106,#107,#108,#109,#110,#111,#112,#113,#114,#115,#116,#117,#124,#125,#126,#127,#128,#129,#130,#131,#132,#133,#134,#135,#136,#137,#144,#145,#146,#147,#148,#149,#150,#151,#152,#153,#154,#155,#156,#157,#164,#165,#166,#167,#168,#169,#170,#171,#172,#173,#174,#175,#176,#177,#184,#185,#186,#187,#188,#189,#190,#191,#192,#193,#194,#195,#196,#197,#204,#205,#206,#207,#208,#209,#210,#211,#212,#213,#214,#215,#216,#217,#225,#226,#227,#228,#229,#230,#231,#232,#233,#234,#235,#236,#247,#248,#249,#250,#251,#252,#253,#254,#262,#263,#269,#270,#271,#272,#284,#288,#289,#290,#291,#292,#293,#305,#306,#307,#308,#309,#310,#311,#312,#313,#328,#329,#330,#331,#332,#333,#348,#349,#350,#351,#352,#353,#368,#369,#370,#371,#372,#373").stop().animate({backgroundColor: "white"}, {duration: 500, queue: false});

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

    var pixdim = 20;
    var pixdmstr = pixdim + "px"

    $(".mypx").css( "width", pixdmstr);
    $(".mypx").css("height", pixdmstr);


    var dim = n * (pixdim + 2) + 2;
    var dimstr = dim + "px";
    $('#bigbox').css( "width", dimstr);
    $('#bigbox').css("height", dimstr);

};
