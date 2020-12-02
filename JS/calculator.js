var rawfruits;
var fruitjuice;
var driedfruits;
			
var rawveg;
var vegjuice;
var driedveg;

var fruittotal;
var vegtotal;

function reload () {

	var rawfruits = document.getElementById("frawfruits").value;
	var fruitjuice = document.getElementById("ffreshfruitjuice").value;
	var driedfruits = document.getElementById("fdriedfruit").value;
					
	var rawveg = document.getElementById("frawveg").value;
	var vegjuice = document.getElementById("fvegjuice").value;
	var driedveg = document.getElementById("fdriedveg").value;

	fruittotal = (1 * rawfruits) + (1 * fruitjuice) + (2 * driedfruits);
	vegtotal = (1 * rawveg) + (1 * vegjuice) + (2 * driedveg);	

	document.getElementById("fruittotal").innerHTML = fruittotal + "&nbsp" + "servings";
	document.getElementById("vegtotal").innerHTML = vegtotal + "&nbsp" + "servings";
	
	if (fruittotal >= 2) {
		alert("Congratulations! You eat enough recommended fruit servings per day!");
	} else {
		alert("You only ate " + fruittotal + " servings of fruit per day! Please consult our other pages to see how you can get enough recommended fruit servings per day cheaply!");}
	;
	
	if (vegtotal >= 3) {
		alert("Congratulations! You eat enough recommended vegetable servings per day!");
	} else {
		alert("You only ate " + vegtotal + " servings of vegetables per day! Please consult our other pages to see how you can get enough recommended vegetable servings per day cheaply!");}
	;
	};
