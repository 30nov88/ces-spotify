(function () {
    'use strict';
    angular
        .module('spotApp')
        .factory('logger', logger);

    logger.$inject = ['$log'];

    /* @ngInject */
    function logger($log){
        var exports = {
            logError: logError
        };
        

        return exports;

        ////////////////

        function logError(msg) {
            var loggedMsg = 'Log error: ' + msg;
            $log.error(loggedMsg);
            return loggedMsg;
        }
    }
})();