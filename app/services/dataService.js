(function () {
    'use strict';

    angular
        .module('sportsStore')
        .factory('dataService', dataService);


    dataService.$inject = ['$http', '$q', 'dataUrl', 'logger'];
    function dataService($http, $q, dataUrl, logger) {

        var service = {};

        service = {
            getData: getData
        };

        return service;

        function getData() {

            var deferred = $q.defer();

            //return $http.get(dataUrl).success(getProducts).error(getProductsFailed)
            //return $http.get(dataUrl).then(getProducts, getProductsFailed);
            return $http.get(dataUrl).then(getProducts).catch(getProductsFailed);

            function getProducts(response) {                             

                deferred.resolve(response);
                return deferred.promise;
            }

            function getProductsFailed(error) {

                logger.error('XHR Failed for getProducts.' + error.statusText);

                deferred.reject(error);
                return deferred.promise;
            }
        }



        //function getData() {

        //    var x = $http.get(dataUrl);

        //    //return $http.get(dataUrl).then(getProducts).catch(getProductsFailed);
            
        //    return $http.get(dataUrl).then(getProducts, getProductsFailed);

        //    function getProducts(response) {
        //        return response.data.results;
        //    }

        //    function getProductsFailed(error) {

        //        logger.error('XHR Failed for getProducts.' + error.data.error);
        //        return error;
        //    }
        //}
    }
}());