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


function generatePassword ( )
{
var password=" "
var passLength=" "
// this confirm that user password will be atleast 4 characters and lestt than 128 characters

var passLength = Number(prompt(" Please enter a number between 4 to 128 for secure password"));
console.log(" This is the length of your secure password " + passLength);

if(passLength >= 4 && passLength<= 128)
{

var numberCriteria= confirm("Press OK or Cancel if you want Number characters in password")
var lowerLetters= confirm("Press OK or Cancel if you want Lower case letters in password")
var upperLetters= confirm("Press OK or Cancel if you want Upper case letters in password")
var symbolCriteria = confirm("Press OK or Cancel if you want Symbols characters in password")

}
// create password by the following values and criteria
if(upperLetters|| lowerLetters||numberCriteria||symbolCriteria)
{
	var passordcharCode=writePassword()
	var passwordText=document.querySelector("#password");
	passwordText.value= passordcharCode;
}
//if inputs do not meet current criteria then default to below reponse

else {
alert( "Please type another numebr to continue or choose a critieria to continue")
};

//funcion to generate random code or characters numbers from charcode
function getRandomLower() 
{

	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() 
{
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber()
 {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol()
 {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)]
 }

 // loop base on the password length and return character based on criteria
 
return password;

}
function writePassword( )
 
 {
 var password=" "
 let passLength= " "
 
 for(let index=0; password.length< passLength; index++){
 
	console.log(password)


 if(lowerLetters)
{ 
	password= password+ getRandomNumber()
}

if(upperLetters)
{
	password=password+ getRandomLower()
}

if(numberCriteria)
{
password= password+ getRandomUpper()

}

if(symbolCriteria)
{
	password= password+ getRandomSymbol()
}

 }
}