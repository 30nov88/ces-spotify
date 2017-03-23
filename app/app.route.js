(function(){
    'use strict';
    angular
        .module('spotApp')
        .config(urlRouting);
        
    urlRouting.$inject = ['$routeProvider', '$locationProvider'];

    /* @ngInject */
    function urlRouting($routeProvider, $locationProvider){
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $routeProvider
        .when("/", {
            templateUrl : "app/layout/home.view.html",
            controller: "HomeCtrl",
            controllerAs: "home"
        })
        .when("/result", {
            templateUrl : "app/layout/result.view.html",
            controller: "ResultCtrl",
            controllerAs: "result"
        })
        .otherwise({
            redirectTo: '/'
        });
    }  // URL ROUTING
})();