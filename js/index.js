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