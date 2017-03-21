(function(){
    'use strict';
    angular
    .module('spotApp',[])
    .controller('MainCtrl',[fn_MainCtrl]);

    function fn_MainCtrl(){
        var vm = this;
        vm.test = "Assignment";
    }
})();

