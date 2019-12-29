function pipe(){
	let relevant;
	for (let i = 1; i < arguments.length; i++ ){
		arguments[i] = arguments[i](arguments[i-1]);
		relevant = arguments[i];
	}
	return relevant;
}

function addOne(x) {
  return x + 1;
}

pipe(1, addOne);
pipe(1, addOne, addOne); 