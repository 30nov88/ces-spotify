
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
        vm.init = init;
        vm.traversePage = traversePage;
        vm.artistClick = artistClick;

        vm.init();

        function init(){
            vm.viewType = 'artist';
            vm.result = getResultService.getResult();
            vm.counter = getResultService.getCount();
        }

        function artistClick(spotID){
            $('.loader').show();
            vm.viewType = 'album';
            searchService.searchSpotify(spotID, vm.viewType, "")
                .then(renderTraversal);
        }

        function traversePage(urlStr){
            $('.loader').show();
            searchService.searchSpotify(vm.result.searchQuery, vm.viewType, urlStr)
                .then(renderTraversal);
        }

        function renderTraversal(){
            var tmpStr = "";
            if(vm.viewType === 'album')
                tmpStr = "artist_";

            vm.result = getResultService.getParseResult(tmpStr);
            vm.counter = getResultService.getCount();
            $('.loader').fadeOut();
        }
    }
})();