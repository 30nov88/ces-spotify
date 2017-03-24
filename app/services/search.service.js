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
        var savePattern, tmpStr, urlStr;

        return exports;

        ////////////

        // USED IN HOME.CTRL, ART-VIEW.DIRECTIVE
        function searchSpotify(queryString, queryType, queryUrl, addQuery){
            tmpStr = localStorage.length + 1;
            savePattern = queryType+ "_" + tmpStr + "_" + queryString;

            if(queryUrl === ""){
                // SEARCH FOR ARTIST OR SONG
                urlStr = constants.searchURL + encodeURIComponent(queryString) + "&type=" + constants[queryType];
            } else {
                // PAGE TRAVERSAL AND RESULT CLICK
                if(addQuery === "")
                    urlStr = queryUrl;
                else if(addQuery === "album")
                    urlStr = queryUrl + "/albums";
                else if (addQuery === "song")
                    urlStr = queryUrl + "/tracks";
            }

            return $http({
                  method: 'GET',
                  url: urlStr,
            }).then(successCallback).catch(errorCallback);
        }   // SEARCH SPOTIFY

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
    } // SEARCH FACTORY

})();