(function(){
    'use strict';
    angular
        .module('spotApp',['ngRoute'])
        .controller('MainCtrl',fn_MainCtrl)
        
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

            $locationProvider.html5Mode({enabled: true, requireBase: false});
            $routeProvider
            .when("/", {
                templateUrl : "views/home.html",
                controller: "HomeCtrl"
            })
            .otherwise({
                redirectTo: '/'
            });
        }]).controller('HomeCtrl',fn_HomeCtrl);


    function fn_MainCtrl(){
        var vm = this;
        vm.heading = "Spotify API Test";
    }
    function fn_HomeCtrl(){
        var vm = this;
        $('.loader').fadeOut();
        
        /*vm.songName = "song1";
        vm.artistName = "artist1";*/
    }
})();

