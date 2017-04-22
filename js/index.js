var typesOfBalls = ['basket', 'base', 'foot'];

for(var i = 0; i < typesOfBalls.length; i++){
	var listElement = document.createElement('li');
	listElement.innerHTML = typesOfBalls[i];
	document.getElementById('ballList').appendChild(listElement);
}

function adjectifier(adjective){
    return function(string){
    	return adjective + " " + string;
    }

}

var coolifier = adjectifier('cool');

console.log(coolifier('javascript'));



//wait for window to load
window.addEventListener('load', registerEvents, false);

//counter
var currentCount = 0;

/**
Registers onclick events
*/
function registerEvents(e){
	document.getElementById('incrementCounter').addEventListener('click', increaseCount, false);
	document.getElementById('incrementCounter').addEventListener('click', increaseSize, false);
}

/**
Increases currentCount and displays the result
*/
function increaseCount(e){
	currentCount++;
	document.getElementById('currentCount').innerHTML = currentCount;
}
/**
Increases the font size of the count text
*/
function increaseSize(e){
	document.getElementById("currentCount").style.fontSize = currentCount;
}
