(function () {
    'use strict';
    angular.module("RepeatModule", [])
        .controller("repeatController", RepeatController);

    RepeatController.$inject = ["$scope"];

    function RepeatController($scope) {
        $scope.name = "Test";
        $scope.shoppingList = shoppingList;
        $scope.AddDetails = function () {

            var newItem = {
                name: $scope.addname,
                surname: $scope.addsurname
            }

            $scope.shoppingList.push(newItem);
        }
    };

    var shoppingList = [
        {
            name : "Atyant",
            surname : "Srivastava"
        },
        {
            name : "Aisha",
            surname : "Rana"
        },
        {
            name: "Dwij",
            surname: "Srivastava"
        }
    ];

})();