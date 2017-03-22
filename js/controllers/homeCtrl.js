
(function() {
    'use strict';

    angular
        .module('spotApp')
        .controller('HomeCtrl',HomeCtrl);

    HomeCtrl.$inject = ['$location', 'searchService'];
    
    function HomeCtrl($location, searchService){
        var vm = this;
        vm.btnSearchClick = btnSearchClick;

        function btnSearchClick(){
            if(!(vm.songName || vm.artistName)) {
              showToast('Kindly enter a search input','warning', 'hide');
            } else {
                var queryString = "", queryType = "";
                $('.loader').show();

                if(vm.songName) {
                  queryString = vm.songName;
                  queryType = "song";
                } else {
                  queryString = vm.artistName;
                  queryType = "artist";
                }

                searchService.searchSpotify(queryString, queryType).then(showResults);
                //showResults();
            }
        } // BTN CLICK
        
        function showResults(){
            $location.path('/result');
        }

    }  // HOMECTRL

})();