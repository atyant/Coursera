(function () {
    'use strict';
    angular.module('ShoppingListModule', [])
        .controller('ShoppingListToBuyController', ShoppingListToBuyController)
        .controller('ShoppingListBoughtController', ShoppingListBoughtController)
        .service('ShoppingListService', ShoppingListService);

    ShoppingListToBuyController.$inject = ['ShoppingListService'];
    function ShoppingListToBuyController(ShoppingListService) {
        var tobuyList = this;

        tobuyList.items = ShoppingListService.getToBuyList();

        tobuyList.additemtoBoughtList = function (quantity, name,itemIndex) {
            console.log(quantity, name, itemIndex);
            ShoppingListService.additemtoBoughtList(quantity, name);
            //ShoppingListService.removeitems(itemIndex);
        };

        tobuyList.boughtNotification = //"test";
            function () {
            return ShoppingListService.boughtNotification();
        };
    };

    ShoppingListBoughtController.$inject = ['ShoppingListService'];
    function ShoppingListBoughtController(ShoppingListService) {
        var boughtList = this;

        //showList.itemName = "";
        //showList.itemQuantity = "";

        boughtList.items = ShoppingListService.getBoughtItems();

        boughtList.toBuyNotification = //"test";
            function () {
                return ShoppingListService.toBuyNotification();
            };
        ////Console.log(showList.items);

        //showList.additem = function () {
        //    ShoppingListService.additemtoBoughtList(showList.itemName, showList.itemQuantity);
        //};
    }

    function ShoppingListService() {
        var service = this;

        var itemsofBoughtList = [];

        var items = [{ name: "Cookie", quantity: 10 },
        { name: "ColdDrinks", quantity: 20 },
        { name: "Beer", quantity: 5 },
        { name: "Chips", quantity: 10 },
        { name: "Fish Fingers", quantity: 10 }];

        service.additemtoBoughtList = function (quantity, name,itemIndex) {
            var itembought = {
                name: name,
                quantity: quantity
            };
            itemsofBoughtList.push(itembought);
            items.splice(itemIndex,1);
        };
        service.getToBuyList = function () {
            return items;
        };

        service.getBoughtItems = function () {
            return itemsofBoughtList;
        };

        service.boughtNotification = function () {
            return items.length !== 0;
        };

        service.toBuyNotification = function () {
            return itemsofBoughtList.length !== 0;
        };
        //service.removeitems = finction(itemIndex)
        //{
        //    items.splice(itemIndex);
        //};
    }

})();