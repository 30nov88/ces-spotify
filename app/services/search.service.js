(function() {
    'use strict';

    angular
        .module('spotApp')
        .factory('searchService', searchService);

    searchService.$inject = ['constants', '$http', 'logger'];

    /* @ngInject */
    function searchService(constants, $http, logger){
        var exports = {
            searchSpotify: searchSpotify
        };
        
        return exports;

        ////////////

        function searchSpotify(queryString, queryType, queryUrl){
            var tmpStr = localStorage.length + 1;
            var savePattern = tmpStr + "_" + queryString + "_" + queryType;
            
            tmpStr = constants.apiURL + encodeURIComponent(queryString) + "&type=" + constants[queryType];
            var urlStr = (queryUrl==="") ? tmpStr : queryUrl;
            //var storageValue = localStorage.getItem(savePattern);

            return $http({
                  method: 'GET',
                  url: urlStr,
            }).then(successCallback).catch(errorCallback);

            function successCallback(response){
                // SAVE ONLY THE LAST 20 SEARCH RESULTS
                if(localStorage.length >= 20)
                    localStorage.clear();

                localStorage.setItem(savePattern, JSON.stringify(response.data));
            }

            function errorCallback(error){
                showToast("Something went wrong. Kindly reload the page", "message", "show");
                logger.logError(error);
            }
        }  // SEARCH SPOTIFY

    } // SEARCH FACTORY

})();