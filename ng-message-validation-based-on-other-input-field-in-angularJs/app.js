(function () {
	angular.module ("net.sgoyal.example",['ngMessages'])
	.controller ("AppCtrl", function ($scope) {
		console.log ("app");
		$scope.form = {};
		
		$scope.saveUser = function (userform) {
			alert ("Form saved");
		};
	});
})();