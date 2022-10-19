function firstFunction(a) {
	return function(b) {
		return a + b;
	}
}
const secondFunction = firstFunction(5);
console.log(secondFunction(4));

