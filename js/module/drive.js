define(['yourCar'],function(aCar){	 
	var obj = {
		run:function(){
			aCar.startEngine();
		} 
	};
	return obj;
});