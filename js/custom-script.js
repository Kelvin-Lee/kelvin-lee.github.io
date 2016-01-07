$(document).ready(function(){

    $('#tog').click(function(){
        $(".mypx").html('');
    });

    $('#SOhover').mouseover(function()
    {

	//$(".inner").css("background-color", "#000000");

        // Grey stack container
	$("#121, #135, #136, #150, #151, #165, #166, #180, #181, #195, #196, #210").css("background-color", "#444444");
	$(".bottom").css("background-color", "#444444");

        // Bottom stack layer
        $(/*"#168, #169, #170, #171, #172, #173, #174, #175, #176, #177, #178"*/
      /*+*/ " #183, #184, #185, #186, #187, #188, #189, #190, #191, #192, #193").css("background-color","orange");

        // Second-from-bottom stack layer
	$("#153, #154, #155, #156, #157, #158, #159, #160, #161, #162, #163").css("background-color", "orange");

        // Third-from-bottom stack layer
        $("#123, #124, #125, #126, #127"/* "#108, #109, #110, #111, #112"*/ + ", #128, #129, #130, #131, #132, #133"
     /* + ", #138, #139, #140, #141, #142, #143, #144, #145, #146, #147, #148"*/).css("background-color", "orange");


      // First (from bottom) tilted stack layer
      $("#63, #64, #65, #66" + ", #82, #83, #84, #85" + ",#101, #102, #103").css("background-color", "orange");

      // Second (from bottom) tilted stack layer
      $("#4, #5" + ", #21, #22" + ", #38, #39" + ", #55, #56" +", #72, #73").css("background-color", "orange");
    
    
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
   
        var strD = '#' + i;
        $(strD).click(function()
        {
           $(strD).css("background-color", "orange");
        });
	
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
