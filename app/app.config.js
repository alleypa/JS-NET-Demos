(function () {

    'use strict';

    function setParseHeader($httpProvider) {

        $httpProvider.defaults.headers.common["X-Parse-Application-Id"] =
            "UNI1QlKngZGvYs1TNRzXHR9VRukZxiwnV6VTFkdE";

        $httpProvider.defaults.headers.common["X-Parse-REST-API-Key"] =
            "y4UkfIrbpb7MSfK5eQyF5HDM13ZbtZxMgu84f2KT";    
    }
        
    function configRoute($routeProvider, $locationProvider) {

        
        //if (window.history && history.pushState) {
        //    $locationProvider.html5Mode(true);
        //}

        $routeProvider.when("/complete", {

            templateUrl: "views/thankYou.html"
        });

        $routeProvider.when("/placeorder", {

            templateUrl: "views/placeOrder.html"
        });

        $routeProvider.when("/checkout", {

            templateUrl: "views/checkoutSummary.html"
        });

        $routeProvider.when("/products", {
            
            templateUrl: "views/ProductList.html"
        });
     
        $routeProvider.otherwise({

            templateUrl: "views/productList.html"
        });
    }

    angular
    .module("sportsStore")
    .config(setParseHeader)
    .config(configRoute);

    setParseHeader.$inject = ["$httpProvider"];
    configRoute.$inject = ["$routeProvider", "$locationProvider"];    
}());


/*
    .config executes when the module is loaded but before the application is executed
*/