function chessBoard (size) {
	var size = size;
	var board = '';
		for(var i=0; i<size; i++) {
			for (var j = 0; j<size; j++) {
				if ((j + i) % 2 === 0) {
					board +=  " ";
				} else { 
					board += "#";
				}//end if
			}//end second for loop
			board += '\n';
		}//end first for loop
	console.log(board);
}//function end
