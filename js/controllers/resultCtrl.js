(function() {
    'use strict';

    angular
        .module('spotApp')
        .controller('ResultCtrl', ResultCtrl);

    ResultCtrl.$inject = ['$location'];

    /* @ngInject */
    function ResultCtrl($location){
        var vm = this;
        //vm.property = 'Controller';
        
// ON CLICK OF BACK BUTTON
        // $location.path('/');
        
        //activate();
// ACCESS LOCALSTORAGE
        ////////////////

        /*function activate() {
        }*/
    }
})();