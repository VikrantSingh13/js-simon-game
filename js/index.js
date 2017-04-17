function adjectifier(adjective){
	return function(string){
		return adjective + " " + string;
	};
}

var coolifier = adjectifier('cool');

console.log(coolifier('functions'));

var rooms = ['h1', 'h2', 'h3'];
var newRooms = rooms.map(function(rm){
	if (rm === 'h3') { return 'h4'}
	else { return rm}

});

console.log(rooms, newRooms);