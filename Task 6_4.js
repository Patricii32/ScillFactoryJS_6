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