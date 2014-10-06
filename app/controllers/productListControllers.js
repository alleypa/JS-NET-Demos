(function () {
    'use strict';
    
    function ProductListControllers(productListActiveClass, productListPageCount, cartService) {

        var vm = this;

        this._selectedCategory = null;
        this._cartService = cartService;

        vm.selectedPage = 1;
        vm.activeClass = productListActiveClass;
        vm.pageSize = productListPageCount;

        vm.title = 'productListController';

        vm.selectCategory = angular.bind(vm, vm.selectCategoryFn);
        vm.selectPage = angular.bind(vm, vm.selectPageFn);
        vm.categoryFilter = angular.bind(vm, vm.categoryFilterFn);
        vm.getCategoryClass = angular.bind(vm, vm.getCategoryClassFn);
        vm.getPageClass = angular.bind(vm, vm.getPageClassFn);
        vm.addProductToCart = angular.bind(vm, vm.addProductToCartFn);

        return vm;
    }

    ProductListControllers.prototype = {
        constructor: ProductListControllers,
        selectCategoryFn: function (newCategory) {

            var controller = this;

            controller._selectedCategory = newCategory || null;

            controller.selectedPage = 1;  
        },
        selectPageFn: function (newPage) {

            var controller = this;
            controller.selectedPage = newPage;  // sets the selected page number       
        },
        categoryFilterFn: function (product) {

            var controller = this;
            return (controller._selectedCategory === null) || (product.category === controller._selectedCategory);
        },
        getCategoryClassFn: function (category) {

            var controller = this;
            return controller._selectedCategory === category ? controller.activeClass : "";
        },
        getPageClassFn: function (page) {

            var controller = this;
            return controller.selectedPage === page ? controller.activeClass : "";
        },
        addProductToCartFn: function (product) {

            var controller = this;
            controller._cartService.addProduct(product.objectId, product.name, product.price);
        }
    };

    angular
        .module('sportsStore')
        .controller('productListController', ProductListControllers);

    ProductListControllers.$inject = ['productListActiveClass', 'productListPageCount', 'cartService'];

}());

/*
 if '===' evaluates to true for || then it shortcircuit
 if '===' evaluated to false for && then it shortcircuit
*/