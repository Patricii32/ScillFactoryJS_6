//Решение с помощью SetInterval
const func = function (a,b){
	timerId = setInterval(function(){
		if( a>b){
	    	clearInterval(timerId);
	 	} else{
			console.log(a);
			a++;
	 	}
   	}, 1000);
}
func(5,15)

/* Альтернативное решение с помощью setTimeout*/
function func(a, b) {
	let current = a;
	setTimeout(function start() {
		console.log(current);
		if (current < b) {
			setTimeout(start, 1000);
		}
		current++;
	}, 1000);
}
func(5, 15);