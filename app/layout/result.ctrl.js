(function() {
    'use strict';

    angular
        .module('spotApp')
        .controller('ResultCtrl', ResultCtrl);

    ResultCtrl.$inject = ['$location', 'getResultService'];

    /* @ngInject */
    function ResultCtrl($location, getResultService){
        var vm = this;
        vm.goHome = goHome;
        vm.type = false;

        init();

        function init(){
            vm.resultObj = getResultService.getParseResult();

            $('.loader').fadeOut();
            vm.type = vm.resultObj.type;
            vm.jsonStr = vm.resultObj.jsonStr;
            vm.searchQuery = vm.resultObj.searchQuery;
        }

        function goHome(){
            $('.loader').show();
            $location.path('/'); 
        }
    } // RESULT CTRL
})();