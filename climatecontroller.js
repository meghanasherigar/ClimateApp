climateApp.controller("climatecontroller",function($scope,climateservice){
	$scope.showCityData=function(name){
		$scope.getCurrentClimate(name);
		angular.forEach($scope.cityData,function(value,key){
			if(value.name==name){
				$scope.cityId=value.id;
				$scope.showWetherData($scope.cityId);

			}

		})
		
	}

	$scope.showWetherData=function(id){
		angular.forEach($scope.whetherData,function(value,key){
				if(value.city.id==id){
					$scope.ans=$scope.whetherData[key];
						console.log("Id in whether"+ $scope.ans);

				}
			})

	}

	climateservice.getCityData().then(function(response){
		$scope.cityData=response.data;
		
		climateservice.getWhetherData().then(function(response){
			$scope.whetherData=response.data;

			$scope.showCityData("Merida");
			
		});

	});
$scope.getCurrentClimate=function (cityname) {
	climateservice.getCurrentWhether(cityname).then(function(response){
		$scope.currentCityData=response.data;
		console.log($scope.currentCityData);
});
}
$scope.climateSearch="";
$scope.$watch("climateSearch",function(newValue,oldValue){
	if(newValue.length>3)
	{
		console.log(newValue);
		$scope.showCityData(newValue);
	}
	else{
		console.log("lenth of the data is <2");
	}

})


})

