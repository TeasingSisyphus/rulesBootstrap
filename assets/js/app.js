(function(){
	console.log("Attached");

	var app = angular.module('rules', []);

	app.controller('rulesController', function($scope) {
		this.val = 'FIRST';
		this.index = null;
		this.explanations = [
		"Nothing prevents or counters scuttling. Scuttling is designed to garuntee that you will not lose next turn at the cost of being an inherently inefficient defensive move.",
		"The One-Off effects of Aces and Sixes are global; they indiscrimenently destroy cards an all sides of the field. Queens only protect against unique effects applied to a SINGLE card (targetting)",
		"This effect can only be used on your turn. Notably, it cannot be used to destroy point cards. It can destroy any face card, or a glasses eight",
		"This can be used to prevent an opponent's one-off effect from happening on their turn. You would then take your own turn."
		];

		this.img = '/images/word-ace-card-back.jpg';



		this.chooseRule = function(index) {
			console.log("Choosing rule");
			if ($scope.rules.index === index) {
				$scope.rules.img = '/images/word-ace-card-back.jpg';
				$scope.rules.index = null;

			} else {
				$scope.rules.index = index;

				console.log(index);
				switch(index) {
					case 0:
					case 1:
						$scope.rules.img = '/images/card_3_12.png';
						break;
					case 2:
						console.log("index is 2");
						$scope.rules.img = '/images/card_3_2.png';
						break;
				}
			}
			//$scope.$apply();
		}
	});
})();