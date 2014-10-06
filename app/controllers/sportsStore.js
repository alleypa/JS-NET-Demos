(function () {
    'use strict';

    function SportsStoreController(dataService, logger) {

        var vm = this;
        vm.title = 'sportsStore';

        this._logger = logger;
        this._dataService = dataService;

        vm.activate();

        return vm;
    }

    SportsStoreController.prototype = {
        constructor: SportsStoreController,
        activate: function () {

            var controller = this;           

            controller.getProducts();
        },
        getProducts: function () {

            var controller = this;

            // return a promise from your data calls
            return controller._dataService.getData().then(success).catch(failure);

            function success(response) {
                
                controller.data = {
                    products: response.data.results
                };  
                
                controller._logger.info("Sport Controller Data Retrieved!");
            }

            function failure(response) {              
              
                controller.data = {
                    error: response.error || response
                };
            }
        }
    };

    angular
    .module('sportsStore')
    .controller('sportsStoreController', SportsStoreController);

    SportsStoreController.$inject = ['dataService', 'logger'];
}());



