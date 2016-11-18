/*//1. what numbar's bigger?

function greaterNum (num1,num2){
	if (num1>num2){
		document.write("the greater number of " +num1 + " and " + num2 + " is " + num2);
	}else{
		 document.write("the greater number of " +num1 + " and " + num2 + " is " + num1);
	}
}

var num1 = prompt("write a number");
var num2 = prompt("write other number");

greaterNum(num1,num2);
*/
//2. the world translator

function helloWorld (languageCode){
	if (languageCode=="es"){
		document.write("Hola Mundo");
	}else if (languageCode=="fr"){
		document.write("salut monde");
	}else if (languageCode=="ch"){
		document.write("你好世界");
	}else{
		document.write("hello world");
	}
}

var code = prompt("write a language code");
helloWorld(code);