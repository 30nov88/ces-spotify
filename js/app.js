(function(){
    'use strict';
    angular
        .module('spotApp',['ngRoute'])
        //.module('spotApp',['ngRoute','spotify'])
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
        }]);
    $('.loader').fadeOut();
})();

