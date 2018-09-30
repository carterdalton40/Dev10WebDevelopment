/*
	Creator: Dalton Carter
	Date Created: 09/30/18
	Most recent revision: 09/30/18
*/

function validateItems(){
	
	//gets all input values
	var name = document.forms["inputData"]["name"].value;
	var email = document.forms["inputData"]["email"].value;
	var phone = document.forms["inputData"]["phone"].value;
	var reason = document.forms["inputData"]["dropdown"].value;
	var info = document.forms["inputData"]["info"].value;
	var evenBeen = document.forms["inputData"]["beenTo"].value;
	
	//checks to see if required Info is not left blank
	if (name == "" || email == "" || phone == "" || everBeen == ""){
		alert("Fill in all information");
	} else {
		alert("All information is valid");
	}
	//For some reason Jquery clears the form when all values are "valid"
	
	return false;
}