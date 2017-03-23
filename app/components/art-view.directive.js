
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

    artistsCtrl.$inject = ['getResultService', 'searchService'];

    /* @ngInject */
    function artistsCtrl(getResultService, searchService) {
        var vm = this;
        vm.result = getResultService.getResult();
        vm.traversePage = traversePage;
        vm.getTitle = getTitle;
        vm.counter = getResultService.getCount();

        function traversePage(urlStr){
            $('.loader').show();
            searchService.searchSpotify(vm.result.searchQuery, "artist", urlStr).then(function(){
                vm.result = getResultService.getParseResult();
                vm.counter = getResultService.getCount();
                $('.loader').fadeOut();
            });
        }
        function getTitle(elems){
            var titleValue = "title";
            return titleValue;
        }
    }
})();