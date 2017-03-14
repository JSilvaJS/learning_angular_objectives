function LikeController ($scope) {
	$scope.count = 0;
	

	$scope.increment = function () {
		$scope.count++;		
	};

	$scope.toggle = function () {
		$scope.count--;
	}
};

LikeController.$inject = ['$scope'];

export default LikeController;