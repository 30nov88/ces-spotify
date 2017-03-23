
/**
 * @desc to bind the artists data by parsing the json
 * @example <artists-view></artists-view>
 */

(function () {
    'use strict';

    angular
        .module('spotApp')
        .directive('artistsView', artistsView);

    function  artistsView() {
        var directive = {
            bindToController: true,
            controller: artistsCtrl,
            controllerAs: 'vm',
            templateUrl: 'app/components/art-view.partial.html',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs, controller) {
            
        }
    }

    artistsCtrl.$inject = ['getResultService'];

    /* @ngInject */
    function artistsCtrl(getResultService) {
        var vm = this;
        vm.result = getResultService.getResult();
    }
})();