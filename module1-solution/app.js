(function () {
    'use strict';
    angular.module('module1', [])
        .controller('module1Controller', Module1Controller);

    Module1Controller.$inject = ['$scope'];
    function Module1Controller($scope) {
        $scope.lunchMenu = "";
        $scope.quantityAte = "";
        $scope.checkLunchQuantity = function () {
            //$scope.lunchItemsNumber = ;
            /*$scope.quantityAte = $scope.lunchMenu.split(',').length;*/
            if ($scope.lunchMenu != "") {


                if ($scope.lunchMenu.split(',').length <= 3 && $scope.lunchMenu.split(',').length > 0) {
                    $scope.quantityAte = "Enjoy";
                } else if ($scope.lunchMenu.split(',').length > 3) {
                    $scope.quantityAte = "Too Much";
                }
                else {
                    $scope.quantityAte = "Please enter data first";
                }
            }
            else {
                $scope.quantityAte = "Please enter data first";
            }
        };
    }


})();