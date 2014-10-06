
(function() {
    'use strict';

    angular
        .module('app.cart')
        .directive('cartSummary', cartSummaryDirective);

    cartSummaryDirective.$inject = ['cartService'];
    
    function cartSummaryDirective(cartService) {

        var directive = {
            restrict: 'EA',
            templateUrl: 'views/cartSummary.html',
            controller: CartSummaryController,
            controllerAs: 'cartCtrl'
        };

        return directive;

        function CartSummaryController() {

            var i,
                cartCtrl = this,
                cartData = cartService.getProducts();

            cartCtrl.total = function () {

                return cartService.getTotal();
            };

            cartCtrl.itemCount = function () {

                return cartService.getItemCount();
            };
        }
    }
}());
