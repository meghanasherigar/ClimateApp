climateApp.factory("climateservice",function($http,$q){
	
	var getCityData=function(){
		var d=$q.defer();
		$http({
			method:"GET",
			url:"JsonData/citiesJSON.json",	
			contentType:"application/json"
		}).then(function success(result){
			d.resolve(result);
		},function error(result){
			d.reject(result);
		});
		return d.promise;


	}
	var getWhetherData=function(){
		var d=$q.defer();
		$http({
			method:"GET",
			url:"JsonData/wholeJson.json",	
			contentType:"application/json"
		}).then(function success(result){
			d.resolve(result);
		},function error(result){
			d.reject(result);
		});
		return d.promise;


	}
	var getCurrentWhether=function(cityName){
		var d=$q.defer();
		var apiKey="b6907d289e10d714a6e88b30761fae22";
		$http({
			method:"GET",
			url:"http://openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey,	
			contentType:"application/json"
		}).then(function success(result){
			d.resolve(result);
		},function error(result){
			d.reject(result);
		});
		return d.promise;


	}
	
	
	return{
		getCityData:getCityData,
		getWhetherData:getWhetherData,
		getCurrentWhether:getCurrentWhether
	}
})