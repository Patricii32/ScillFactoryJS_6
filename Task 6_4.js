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
	setTimeout(function start(){
		console.log(a);
		if (a < b) {
			setTimeout(start, 1000);
		}
		a++;
	}, 1000);
}
func(5, 15);