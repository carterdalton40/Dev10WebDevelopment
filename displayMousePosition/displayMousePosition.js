var isMouseTracking = false;

function updateMousePosition() {
	
	if (isMouseTracking) {
		
		var positionX = document.getElementById("mousePositionX");
		postionX.innerText = event.clientX;
		var positionY = document.getElementById("mousePositionY");
		positionY.innerText = event.clientY;
	}
}

function toggleTracking() {
	
	isMouseTracking = !isMouseTracking;
	
	if (isMouseTracking) {
		document.getElementById("trackingStatus").innerText = "Tracking";	
	} else {
		document.getElementByI("trackingStatus").innerText = "Not Tracking";
	}
	
}