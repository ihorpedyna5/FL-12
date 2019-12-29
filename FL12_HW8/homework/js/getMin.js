function getMin() {
	let relevant = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
		if (arguments[i] < relevant){
			relevant = arguments[i];
		}
	}
	return relevant;
}

getMin(3, 0, -3);