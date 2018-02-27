(function() {

var app = angular.module("store", ["store-directives"]);

app.factory('httpq', function($http, $q) {
	return {
		get: function() {
			var deferred = $q.defer();
			$http.get.apply(null,arguments)
				.then(deferred.promise)
				.catch(deferred.promise);
			
			return deferred.promise;
		}
	}
});

app.controller("StoreController", function(httpq) {
	var store = this;
	store.products = [];
	httpq.get('api/products.json')
	.then(function(data) {
		console.log("ewqeq");
		store.products=data.data;
	})
	.catch(function() {
		console.log('dsdsdsdfsdfsd');
	})
	.finally(function() {
		console.log('hgjhgjhg');
	});

});

}) ();





