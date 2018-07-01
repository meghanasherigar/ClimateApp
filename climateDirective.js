climateApp.directive("climateDirective", function() {
	console.log("in diective");
    return {
    	restrict:'E',
        template : "<h1>Made by a directive!</h1>"
    }
});