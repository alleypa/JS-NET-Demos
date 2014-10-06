
(function () {
    'use strict';

    angular
        .module('app.cart')
        .factory('cartService', cartService);

    function cartService() {

        var cartData = [],
            service = {};

        service = {
            addProduct: addProduct,
            removeProduct: removeProduct,
            getTotal: getTotal,
            getProducts: getProducts,
            getItemCount: getItemCount
        };

        return service;

        function addProduct(id, name, price) {

            var i,
                addedToExistingItem = false; // reset every time we call into this function

            for (i = 0; i < cartData.length; i += 1) {

                if (cartData[i].objectId === id) {

                    cartData[i].count += 1;
                    
                    addedToExistingItem = true;
                    break;
                }                
            }

            if (!addedToExistingItem) { // this executes first

                cartData.push({
                    count: 1,
                    objectId: id,
                    price: price,
                    name: name
                });
            }
        }

        function removeProduct(id) {

            var i;

            for (i = 0; i < cartData.length; i += 1) {

                if (cartData[i].objectId === id) {

                    cartData.splice(i, 1);
                    break;
                }
            }
        }

        function getTotal() {

            var i,
                total = 0;

            for (i = 0; i < cartData.length; i += 1) {

                total += (cartData[i].price * cartData[i].count);
            }

            return total;
        }

        function getProducts() {

            return cartData;
        }

        function getItemCount() {

            var i,
                total = 0;

            for (i = 0; i < cartData.length; i += 1) {

                total += cartData[i].count;
            }

            return total;
        }
    }
}());