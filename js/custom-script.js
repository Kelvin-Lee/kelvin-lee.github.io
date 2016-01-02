$(document).ready(function(){

    var mySO = "http://stackoverflow.com/users/5455994/"
             + "kelvin-lee?tab=profile";
    var myGH= "http://github.com/kelvin-lee";
    document.getElementById("mySO").href = mySO;
    document.getElementById("myGH").href = myGH;

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

