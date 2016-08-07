for (var i = 1; i < 101; i++){
	if (i % 3 == 0 && i % 5 == 0){
		debug("FizzBuz");
	}
	else if (i % 3 == 0){
		debug("Fizz");
	}
	else if (i % 5 == 0){
		debug("Buzz");
	}
	else{
		debug(i);
	}
}