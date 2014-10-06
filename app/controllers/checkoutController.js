(function () {
    'use strict';

    function CheckoutController(cartService) {
                
        var vm = this;
        vm.title = 'checkoutController';
        vm._cartService = cartService;

        vm.total = angular.bind(vm, vm.totalFn);
        vm.remove = angular.bind(vm, vm.removeFn);

        vm.cartData = cartService.getProducts();
    }

    CheckoutController.prototype = {
        constructor: CheckoutController,
        totalFn: function () {

            var controller = this;
            return controller._cartService.getTotal();
        },
        removeFn: function (id) {

            var controller = this;
            controller._cartService.removeProduct(id);
        }
    };

    angular
    .module('sportsStore')
    .controller('checkoutController', CheckoutController);

    CheckoutController.$inject = ['cartService'];
}());
