(function(){
    'use strict';
    angular
        .module('spotApp',['ngRoute'])
        .config(urlRouting);
        
    urlRouting.$inject = ['$routeProvider', '$locationProvider'];

    function urlRouting($routeProvider, $locationProvider){
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $routeProvider
        .when("/", {
            templateUrl : "views/home.html",
            controller: "HomeCtrl",
            controllerAs: "home"
        })
        .when("/result", {
            templateUrl : "views/result.html",
            controller: "ResultCtrl",
            controllerAs: "result"
        })
        .otherwise({
            redirectTo: '/'
        });
    }  // URL ROUTING

    $('.loader').fadeOut();
})();