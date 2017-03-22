(function () {
    'use strict';

    angular
        .module('spotApp')
        .directive('artistsView', artistsView);

    /* @ngInject */
    function  artistsView() {
        var directive = {
            bindToController: true,
            controller: artistsCtrl,
            controllerAs: 'vm',
            templateUrl: 'partials/partial-art-info.html',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs, controller) {
            
        }
    }

    artistCtrl.$inject = ['getResultService'];

    /* @ngInject */
    function artistsCtrl(getResultService) {
        var vm = this;
        vm.result = getResultService.getResult();
    }
})();