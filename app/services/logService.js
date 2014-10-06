(function () {
    'use strict';

    angular
        .module('sportsStore')
        .factory('logger', logger);

    logger.$inject = ['$log'];  // bring toastr in later
    function logger($log) {

        var loggedMsg,
            service = {},
            date = new Date(),
            dateCurrent = date.toDateString() + " " + date.toLocaleTimeString();

        service = {
            error: error,
            info: info
            //success: success,
            //warning: warning
        };

        return service;

        function error(message) {

            loggedMsg = message + " " + dateCurrent;
            $log.error(loggedMsg);
        }

        function info(message) {

            loggedMsg = message + " " + dateCurrent;
            $log.info(loggedMsg);
        }    
    }
}());