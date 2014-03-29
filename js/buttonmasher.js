
var enteredCode = 0;
var secretCodeHashed = "caae34a5e81031268bcdaf6f1d8c04d37b7f2c349afb705b575966f63e2ebf0fd910c3b05160ba087ab7af35d40b7c719c53cd8b947c96111f64105fd45cc1b2";
var secretCodeLength = 3;
var numberDisplayCount = 0;
var numberOfStyles = 4;
var numberOfButtons = 4;
var numberSystem = numberOfButtons + 1
var deler = Math.pow(numberSystem, secretCodeLength - 1);


function right(str,chr)
{
	return newstr=str.substr(str.length-chr,str.length)
}

$(document).ready(function(){
	for (var i = 1; i < numberOfButtons; i++) {
		$(".testButton").first().clone().appendTo(".buttonContainer");
	}

	$("div.numberDisplay").html(numberDisplayCount);

	$(".testButton").each(function(index) {
		$(this).addClass("testButton_" + ((index % numberOfStyles) + 1));
	});
	
	$(".testButton").click(function(e){
		
		numberDisplayCount++;
		$("div.numberDisplay").html(numberDisplayCount);
		
		var buttonNumber = $(e.target).index(".testButton") + 1;
		enteredCode = enteredCode % deler;
		enteredCode *= numberSystem;
		enteredCode += buttonNumber;


		var enteredCodeHashed = hex_sha512("" + enteredCode); // convert entered code to a SHA-512 hash string 
		if (secretCodeHashed == enteredCodeHashed) {
			alert("You cracked the code!");
		}
	});
	
});