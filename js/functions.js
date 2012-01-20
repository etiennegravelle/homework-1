// JavaScript Document

alert('this is an alert!'); //this pops up an alert with an ok button

var name;

while(!name) {
	name = prompt('what is your name?');
}

//'console.log()' writes out the content of a variable for debugging
//identical to Actionscript's 'trace()'

console.log(name);


function isNameCool () {
	var name = prompt('What is your name?')
		
	if (name == 'a') {
	}else{
		document.write("I don't like your name!");
	}
}

isNameCool();

var writeNameMultipleTimes = function () {
	for( i = 0; i<=9; i++ ){
		document.write("a" + "<br />");
	}
	
};

writeNameMultipleTimes();
			
			
//total=0
//for (i=1; i<5000; i++) {
	//num = Math.random();
	//total +=num;
	//if (i % 1000 == 0)
		//document.write("Generated " + i + " numbers...<br/>");
	//}
//}