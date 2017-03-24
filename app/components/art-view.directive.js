
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
        vm.traverseList = traverseList;
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
            searchService.searchArtAlbum(spotID).then(function(){
                vm.result = getResultService.getParseResult("artist_");
                vm.counter = getResultService.getListCount();
                $('.loader').fadeOut();
            });
        }

        function traverseList(urlStr){
            //$('.loader').show();
            alert(urlStr);
        }

        function traversePage(urlStr){
            $('.loader').show();
            searchService.searchSpotify(vm.result.searchQuery, "artist", urlStr)
                .then(renderTraversal);
        }

        function renderTraversal(){
            vm.result = getResultService.getParseResult("");
            vm.counter = getResultService.getCount();
            $('.loader').fadeOut();
        }
    }
})();