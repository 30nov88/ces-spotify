(function() {
    'use strict';

    angular
        .module('spotApp')
        .controller('MainCtrl',MainCtrl);

    function MainCtrl(){
        var vm = this;
        vm.heading = "Spotify API Test";
    }
})();