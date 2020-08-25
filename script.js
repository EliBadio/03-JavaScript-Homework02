// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// adding this Function to make sure we can get a random integer from min to max
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function generatePassword ( ){
	
	// this confirm that user password will be atleast 4 characters and lestt than 128 characters

	var passLength = Number(prompt(" Please enter a number between 4 to 128 for secure password"));
	console.log(" This is the length of your secure password " + passLength);

	//Prompt user for desired character types and password length

if(passLength >= 4 && passLength<= 128){

	var numberCriteria= confirm("Press OK or Cancel if you want Number characters in password");
	var lowerLetters= confirm("Press OK or Cancel if you want Lower case letters in password");
	var upperLetters= confirm("Press OK or Cancel if you want Upper case letters in password");
	var symbolCriteria = confirm("Press OK or Cancel if you want Symbols characters in password");

}

 // adding this line to make sure I convert passLength to an integer.
 passLength = parseInt(passLength);
 // Create both variable for input and an object that contains all the characters needed to generate.
 var addPw = "";
 
 var charLetters = {
   lowerChar: "abcdefghijklmnopqrstuvwxyz",
   upperChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
   numbersChar: "0123456789",
   symbolsChar: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
 }

 //  this is to confirm that at least one character type was chosen  and below I append letters
 if ((upperLetters || lowerLetters || numberCriteria|| symbolCriteria) && passLength >= 8 && passLength <= 129){
  
	// Create an array to store the chosen character types.
  
   var charTypes = [];
   
   if (upperLetters){
	 
	 charTypes.push("upperChar");
   }
   
   if (lowerLetters){
	 
	 charTypes.push("lowerChar");
   }
   
   if (numberCriteria){
	 
	 charTypes.push("numbersChar");
   }
   
   if (symbolCriteria){
	 
	 charTypes.push("symbolsChar");
   }
   

   for (let i = 0; i < passLength; i++){
	 
	 var charType = charTypes[getRandomInt(0, charTypes.length)];
	
	addPw += charLetters[charType][getRandomInt(0,charLetters[charType].length)]
   }
   // Return the finished password from the function.
   return addPw;
 // If the inputs above were invalid...
 } else {
   // Alert the minimum requirements for a valid password.
   alert("You must select at least one character type and a length from 8-129.")
   // Return the value false
   return false;
 }

 return password
}