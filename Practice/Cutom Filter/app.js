(function () {
    'use strict';
    angular.module('PracticeModule', [])
        .controller('PracticeController', PracticeController)
        .filter('custom', CustomFilterFactory);

    PracticeController.$inject = ['$scope','customFilter'];

    function PracticeController($scope, customFilter) {
        $scope.name = "Atyant";
        $scope.finalmessage = 'Cost';
        $scope.CorrectCurreny = .45;
        //$scope.SayHello = function () {
        //    $scope.finalmessage = $filter('uppercase')($scope.name);
        //};
        $scope.customMessage = customFilter($scope.finalmessage);

    };

    function CustomFilterFactory() {
        return function (input) {
            input = input || "";
            input = input.replace("Cost", "Currency Cost");
            return input;
        };
    }

})();
