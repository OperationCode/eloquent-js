function countBs (string) {
	var numberBs = 0;
	for (var i=0; i < string.length; i++) {
		if (string.charAt(i) === "B") {
			numberBs += 1;
		}
	}
	return numberBs;
}

function countChar (string, character) {
	var numberBs = 0;
	for (var i=0; i < string.length; i++) {
		if (string.charAt(i) === character) {
			numberBs += 1;
		}
	}
	return numberBs;
}
