
var enteredCode = 0;
var secretCodeHashed = "7a6328ffce84ee490edfc0368ee00c6b9b48232941b27789088b134002c3c40bf3cfa3ad1a991ee142c8fb962510a97bd1f0b32b0251d189f6be02d0b0c0a181";
var secretCodeLength = 4;
var numberDisplayCount = 0;
var numberOfStyles = 4;
var numberOfButtons = 4;
var numberSystem = numberOfButtons + 1
var divider = Math.pow(numberSystem, secretCodeLength - 1);
var codeCracked = false; 


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
		
		if (!codeCracked) {
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
			 	$(".secretImage").html('<div class="codeCrackedMessage"><span class="wrongCode" ><h2>WRONG CODE!</h2><p>Please try again</p></span></div>');
			 enteredCode = 0;
		}


		//Use a mathematical algorithm to store the pressed button in enteredCode
		enteredCode = enteredCode % divider;
		enteredCode *= numberSystem;
		enteredCode += lastEnteredButton;

		// convert entered code to a SHA-512 hash string 
		var enteredCodeHashed = hex_sha512("" + enteredCode);

		// If the code is correct, do stuff 
		if (secretCodeHashed == enteredCodeHashed) {
			codeCracked = true;
			$(".secretImage").html('<div class="codeCrackedMessage"><h2>You cracked the code!</h2><p><i>Congratulations!</i></p></div>');

		}

		}
	});
});