(function(){
	
	var app = angular.module('store-directives', []);

	app.directive("prodItem", function() {

return {

restrict: "A",
templateUrl: "product-item.html"

};

});

})();