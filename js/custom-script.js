
/* primaryNonWorkString is changed in the HTML file */
var primaryNonWorkString = document.getElementById("non-work").innerHTML;
var secondaryNonWorkString = "^";
var primaryDisplay = document.getElementById("jumbotron-display");
var secondaryDisplay = document.getElementById("jumbotron-display-alt");
var jumbotron = document.getElementById("jumbotron");

function showSection(x){
	document.getElementsByClassName("section").style.display = "none";
	document.getElementById(x).style.display = "block";
}

function toggleContact(){
	var current = document.getElementById("contact").innerHTML;

	if (current == "CONTACT")
		document.getElementById("contact").innerHTML = "kklee@ucdavis.edu";

	if (current == "kklee@ucdavis.edu")
		document.getElementById("contact").innerHTML = "CONTACT";
}

function toggleNonWork(){
	var button = document.getElementById("non-work");
	var current = button.innerHTML;

	if (current == primaryNonWorkString){
		button.innerHTML = secondaryNonWorkString;
		secondaryDisplay.style.display = "block";
		primaryDisplay.style.display = "none";
	}

	if (current == secondaryNonWorkString){
		button.innerHTML = primaryNonWorkString;
		primaryDisplay.style.display = "block"
		secondaryDisplay.style.display = "none";
	}

	/* EXCEPTION HANDLER should go here */
}
