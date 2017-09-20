var inputfield = document.querySelector(".inputfield")	
var guessButton = document.querySelector(".guessButton")
var numberArea = document.querySelector(".numberArea")
var clearButton = document.querySelector(".clearButton")
var resetButton = document.querySelector(".resetButton")
var lastGuessText = document.querySelector(".lastGuess")
var zero = document.querySelector(".zero")
var hundred = document.querySelector(".hundred")
var currentRange = document.querySelector(".currentrange")
var minButton = document.querySelector(".minbutton")
var maxButton = document.querySelector(".maxbutton")
var min = document.querySelector('.min')
var max = 100
var randomNumber = 0;
var guessInput = 0;
// console.log(inputfield.value.length)


guessButton.addEventListener('click' , numberGuess)
clearButton.addEventListener('click' , clearField)
resetButton.addEventListener('click' , resetInput)
inputfield.addEventListener('keyup' , disableClear)
inputfield.addEventListener('keyup' , enableReset)
inputfield.addEventListener('keyup' , enableGuess)

getRandom();

function disableClear() {
	if (inputfield.value === "") {
		clearButton.disabled = true;
	} 
else { 
	clearButton.disabled = false;
	}
}

function enableReset() {
	if (inputfield.value ===""){
		resetButton.disabled = true;
	}else {
		resetButton.disabled = false;
	}
}

function enableGuess() {
	if (inputfield.value === "" || isNaN(inputfield.value) || inputfield.value > max || (inputfield.value < min)){
		numberArea.innerText = "out of range";
		guessButton.disabled = true;
	} else {
		guessButton.disabled = false;
	}
}

function numberGuess() {
	guessInput = parseInt(inputfield.value);
	numberArea.innerText = guessInput
	
	if (guessInput > 100){


	} else if ( guessInput === randomNumber){
		lastGuessText.innerText = "boom";
		zero.innerText = min - 10;
		hundred.innerText = max + 10;
		makeharder();
		getRandom();
	} else if (guessInput > randomNumber){
		lastGuessText.innerText = "too high";
	} else {
		lastGuessText.innerText = "too low";
	}

}

function makeharder(){
	max += 10;
	min -= 10;
	currentRange.innerText = "Your new range is " + (min) + " -- " + (max);
}
function getRandom() {
	randomNumber = Math.floor(Math.random() * (max - min + 1) );
	console.log("randon number is " + randomNumber)
}

function clearField() {
	inputfield.value = "";
	clearButton.disabled = true;
}

function resetInput(){
	getRandom();
	clearField();
	resetButton.disabled=true;
	numberArea.innerText = "_";
}
// function userRange(){
// 	userRandomNumber = Math.floor(Math.random() * (minButton.innerText) + (max.innerText) )
// }
// function userMin() {
	
// }
	



