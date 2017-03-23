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
            templateUrl : "views/home.view.html",
            controller: "HomeCtrl",
            controllerAs: "home"
        })
        .when("/result", {
            templateUrl : "views/result.view.html",
            controller: "ResultCtrl",
            controllerAs: "result"
        })
        .otherwise({
            redirectTo: '/'
        });
    }  // URL ROUTING

    $('.loader').fadeOut();
})();