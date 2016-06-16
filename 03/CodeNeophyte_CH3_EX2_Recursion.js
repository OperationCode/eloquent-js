function isEven (number) {
	if (number === 0 ) {
		return true;
	} else if (number === 1) {
		return false;
	} else if (number < 0) {
		return isEven(-number);
	} else {
		return isEven(number - 2);
	}
}
