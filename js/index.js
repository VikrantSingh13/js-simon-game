var typesOfBalls = ['basket', 'base', 'foot'];

for(var i = 0; i < typesOfBalls.length; i++){
	var listElement = document.createElement('li');
	listElement.innerHTML = typesOfBalls[i];
	document.getElementById('ballList').appendChild(listElement);
}