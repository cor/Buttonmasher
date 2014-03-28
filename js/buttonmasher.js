
var enteredCode = 0;
var secretCodeHashed = "14f70566435cea4309176ad6a8aebb69ac8f99e9e211df66227522b5bb37c7a52e1f4de42543e4bb5346dbce23a636c7237a42e67ff4888befcc2167f7c2b451";
var secretCodeLength = 3;
var numberOfButtons = 4;
var deler = Math.pow(secretCodeLength, numberOfButtons);


function right(str,chr)
{
	return newstr=str.substr(str.length-chr,str.length)
}

$(document).ready(function(){

	var numberDisplayCount = 0;
	$("div.numberDisplay").html(numberDisplayCount);
	
	$(".testButton").click(function(e){
		
		numberDisplayCount++;
		$("div.numberDisplay").html(numberDisplayCount);
		
		
		var buttonNumber = parseInt(e.target.id);
		enteredCode = enteredCode % deler;
		enteredCode *= numberOfButtons;
		enteredCode += buttonNumber;

		var enteredCodeHashed = hex_sha512("" + enteredCode);

		if (secretCodeHashed == enteredCodeHashed) {
			alert("YES!");
		}
	});
});