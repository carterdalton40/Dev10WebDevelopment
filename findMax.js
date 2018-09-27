function findMax(list){
	var max = 0;
	
	for (var index = 0; index < list.length; index++){
		
		if (list[index] > max){
			max = list[index]
		}
	}
	
	return max;
}