

function adjectifier(adjective){
    return function(string){
    	return adjective + " " + string;
    }

}

var coolifier = adjectifier('cool');

console.log(coolifier('javascript'));

window.onload = function(){
  function callback(val){
  	console.log(val);
  }
  var fruits = ['banana', 'apple', 'pear'];
  fruits.forEach(callback);
  console.log('done');
};

