var app = angular.module("storkclub", []);

console.log("we're in good shape");

app.controller('MainCtrl', function ($scope) {
	$scope.message = "world";

	$scope.bands = [
		{name: "The Hospital Bombers", members: 5, genre: "death metal"},
		{name: "Satan's Fingers", members: 3, genre: "death metal"},
		{name: "The Best Ever Death Metal Band Out of Denton", members: 2, genre: "death metal"},
		{name: "Elvis Depressedly", members: 3, genre: "depressing indie shit"}
	];
$scope.addBand = function() {
	// console.log($scope.newBand);
	$scope.bands.push($scope.newBand);
};
});