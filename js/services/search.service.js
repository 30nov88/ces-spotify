(function() {
    'use strict';

    angular
        .module('spotApp')
        .factory('searchService', searchService);

    searchService.$inject = ['constants', '$http'];

    /* @ngInject */
    function searchService(constants, $http){
        var exports = {
            searchSpotify: searchSpotify
        };
        
        return exports;

        ////////////

        function searchSpotify(queryString, queryType){
            var tmpStr = localStorage.length + 1;
            var savePattern = tmpStr + "_" + queryString + "_" + queryType;
            //var storageValue = localStorage.getItem(savePattern);

            return $http({
                  method: 'GET',
                  url: constants.apiURL + encodeURIComponent(queryString) + "&type=" + constants[queryType],
            }).then(successCallback).catch(errorCallback);

            function successCallback(response){
                $('.loader').fadeOut();

                // SAVE ONLY THE LAST 20 SEARCH RESULTS
                if(localStorage.length >= 20)
                    localStorage.clear();

                localStorage.setItem(savePattern, JSON.stringify(response.data));
            }

            function errorCallback(error){
                showToast("Something went wrong. Kindly reload the page", "message", "show");
                console.log(error.data);
            }
        }  // SEARCH SPOTIFY

    } // SEARCH FACTORY

})();