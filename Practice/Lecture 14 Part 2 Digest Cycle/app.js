(function () {
    'use strict';
    angular.module('WatcherModule', [])
        .controller('watcherController', WatcherController);

    WatcherController.$inject = ['$scope'];

    function WatcherController($scope) {
        $scope.testName = "Atyant";

        $scope.clickmeOnce = function () {
            $scope.testName = "Atyant Srivastava";
        };

        $scope.$watch(function () {
            console.log("Digest Cycle Started!!")
        })

        //$scope.$watch('testName', function (newValue, oldValue) {
        //    console.log("Old Value :", oldValue);
        //    console.log("new Value :", newValue);
        //})
        
    };


})();

