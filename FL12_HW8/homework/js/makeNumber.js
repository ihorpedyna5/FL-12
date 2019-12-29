function makeNumber(string) {
	let relevant = '';
	for (let i = 0; i < string.length; i++) {
		if (string[i] >= 0) {
			relevant += string[i];
		}
	}
	return relevant;
}

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');