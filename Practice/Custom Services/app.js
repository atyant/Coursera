(function () {
    'use strict';
    angular.module('CustomServiceModule', [])
        .controller('ShoppingListAddController', ShoppingListAddController)
        .controller('ShoppingListShowController', ShoppingListShowController)
        .service('ShoppingListService', ShoppingListService);

    ShoppingListAddController.$inject = ['ShoppingListService'];
    function ShoppingListAddController(ShoppingListService) {
        var itemAdder = this;

        itemAdder.itemName = "";
        itemAdder.itemQuantity = "";

        itemAdder.additem = function () {
            ShoppingListService.additem(itemAdder.itemName, itemAdder.itemQuantity);
        };
    };

    ShoppingListShowController.$inject = ['ShoppingListService'];
    function ShoppingListShowController(ShoppingListService) {
        var showList = this;

        showList.items = ShoppingListService.getItems();
    }

    function ShoppingListService() {
        var service = this;
        
        var items = [];

        service.additem = function (itemName, itemQuantity) {
            //console.log("hitting");
            var item = {
                name: itemName,
                quantity: itemQuantity
            };
            items.push(item);
        };

        service.getItems = function () {
            return items;
        };
    }

})();
