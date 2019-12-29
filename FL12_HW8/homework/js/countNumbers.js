function countNumbers(string){
	let relevant = {};
	for(let i = 0; i < string.length; i++){
		if (string[i] >= 0){
			if (Object.prototype.hasOwnProperty.call(relevant, string[i])){
				relevant[string[i]]+=1;
			} else {
					relevant[string[i]] = 1;
			}
		}
	}
	return relevant;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');