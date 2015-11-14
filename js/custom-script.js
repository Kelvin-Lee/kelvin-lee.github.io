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

