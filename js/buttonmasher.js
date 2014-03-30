
var enteredCode = 0;
var secretCodeHashed = "caae34a5e81031268bcdaf6f1d8c04d37b7f2c349afb705b575966f63e2ebf0fd910c3b05160ba087ab7af35d40b7c719c53cd8b947c96111f64105fd45cc1b2";
var secretCodeLength = 3;
var numberDisplayCount = 0;
var numberOfStyles = 4;
var numberOfButtons = 4;
var numberSystem = numberOfButtons + 1
var divider = Math.pow(numberSystem, secretCodeLength - 1);


$(document).ready(function(){

	/**
	 * clone the button a specific amount of times (numberOfButtons)
	 */
	for (var i = 1; i < numberOfButtons; i++) {
		$(".testButton").first().clone().appendTo(".buttonContainer");
	}

	/**
	 * Show how many buttons are pressed on the numberDisplay
	 */
	$("div.numberDisplay").html(numberDisplayCount);

	/**
	 * Add CSS styles to each button for use in the stylesheet
	 */
	$(".testButton").each(function(index) {
		$(this).addClass("testButton_" + ((index % numberOfStyles) + 1));
	});
	
	$(".testButton").click(function(event){	
		
		numberDisplayCount++;
		$("div.numberDisplay").html(numberDisplayCount);
		
		//use jquery to check what button is pressed and convert it to 1-based
		var lastEnteredButton = $(event.target).index(".testButton") + 1;
		
		//Change the colors in the colordisplay
		if ($(".enteredCodeDisplay_1").css("background-color") == "rgb(255, 255, 255)" ) {

				if (lastEnteredButton == 1) $(".enteredCodeDisplay_1").css("background-color", "rgb(235, 46, 34)");
			 	else if (lastEnteredButton == 2) $(".enteredCodeDisplay_1").css("background-color", "rgb(235, 75, 61)");
				else if (lastEnteredButton == 3) $(".enteredCodeDisplay_1").css("background-color", "rgb(235, 107, 64)");
			 	else if (lastEnteredButton == 4) $(".enteredCodeDisplay_1").css("background-color", "rgb(226, 177, 49)");
			 	else $(".enteredCodeDisplay_1").css("background-color", "pink");
		}
		else if ($(".enteredCodeDisplay_2").css("background-color") == "rgb(255, 255, 255)" ) {

				if (lastEnteredButton == 1) $(".enteredCodeDisplay_2").css("background-color", "rgb(235, 46, 34)");
			 	else if (lastEnteredButton == 2) $(".enteredCodeDisplay_2").css("background-color", "rgb(235, 75, 61)");
				else if (lastEnteredButton == 3) $(".enteredCodeDisplay_2").css("background-color", "rgb(235, 107, 64)");
			 	else if (lastEnteredButton == 4) $(".enteredCodeDisplay_2").css("background-color", "rgb(226, 177, 49)");
			 	else $(".enteredCodeDisplay_2").css("background-color", "pink");
		}
		else if ($(".enteredCodeDisplay_3").css("background-color") == "rgb(255, 255, 255)" ) {

				if (lastEnteredButton == 1) $(".enteredCodeDisplay_3").css("background-color", "rgb(235, 46, 34)");
			 	else if (lastEnteredButton == 2) $(".enteredCodeDisplay_3").css("background-color", "rgb(235, 75, 61)");
				else if (lastEnteredButton == 3) $(".enteredCodeDisplay_3").css("background-color", "rgb(235, 107, 64)");
			 	else if (lastEnteredButton == 4) $(".enteredCodeDisplay_3").css("background-color", "rgb(226, 177, 49)");
			 	else $(".enteredCodeDisplay_3").css("background-color", "pink");
		}
		else if ($(".enteredCodeDisplay_4").css("background-color") == "rgb(255, 255, 255)" ) {

				if (lastEnteredButton == 1) $(".enteredCodeDisplay_4").css("background-color", "rgb(235, 46, 34)");
			 	else if (lastEnteredButton == 2) $(".enteredCodeDisplay_4").css("background-color", "rgb(235, 75, 61)");
				else if (lastEnteredButton == 3) $(".enteredCodeDisplay_4").css("background-color", "rgb(235, 107, 64)");
			 	else if (lastEnteredButton == 4) $(".enteredCodeDisplay_4").css("background-color", "rgb(226, 177, 49)");
			 	else $(".enteredCodeDisplay_4").css("background-color", "pink");
		}
		else {
			$(".enteredCodeDisplay_1").css("background-color", "rgb(255, 255, 255)");
			$(".enteredCodeDisplay_2").css("background-color", "rgb(255, 255, 255)");
			$(".enteredCodeDisplay_3").css("background-color", "rgb(255, 255, 255)");
			$(".enteredCodeDisplay_4").css("background-color", "rgb(255, 255, 255)");

			if (lastEnteredButton == 1) $(".enteredCodeDisplay_1").css("background-color", "rgb(235, 46, 34)");
			 	else if (lastEnteredButton == 2) $(".enteredCodeDisplay_1").css("background-color", "rgb(235, 75, 61)");
				else if (lastEnteredButton == 3) $(".enteredCodeDisplay_1").css("background-color", "rgb(235, 107, 64)");
			 	else if (lastEnteredButton == 4) $(".enteredCodeDisplay_1").css("background-color", "rgb(226, 177, 49)");
			 	else $(".enteredCodeDisplay_1").css("background-color", "pink");
		}


		//Use a mathematical algorithm to store the pressed button in enteredCode
		enteredCode = enteredCode % divider;
		enteredCode *= numberSystem;
		enteredCode += lastEnteredButton;

		// convert entered code to a SHA-512 hash string 
		var enteredCodeHashed = hex_sha512("" + enteredCode);

		// If the code is correct, do stuff 
		if (secretCodeHashed == enteredCodeHashed) {
			alert("You cracked the code!");
		}

	});
});