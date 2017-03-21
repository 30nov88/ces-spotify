(function(){
    'use strict';
    angular
        .module('spotApp',['ngRoute'])
        .controller('MainCtrl',[fn_MainCtrl])
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
    ;
        

    function fn_MainCtrl(){
        var vm = this;
        vm.heading = "Spotify API";
    }
})();

