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

        function searchSpotify(queryString, queryType, queryUrl){
            tmpStr = localStorage.length + 1;

            if(queryUrl === "" && queryType === "album"){
                // SEARCH FOR AN ARTIST'S ALBUMS
                queryString = queryString.replace("spotify:artist:","");
                savePattern = "artist_" + tmpStr + "_" + queryString;
                urlStr = constants.artistsURL + queryString + "/albums";
            } else if(queryUrl === "" && queryType === "artist"){
                // SEARCH FOR ARTIST
                savePattern = tmpStr + "_" + queryString + "_" + queryType;
                urlStr = constants.searchURL + encodeURIComponent(queryString) + "&type=" + constants[queryType];
            } else if(queryType === "artist"){
                // PAGE TRAVERSAL IN ARTIST'S SEARCH
                savePattern = tmpStr + "_" + queryString + "_" + queryType;
                urlStr = queryUrl;
            } else {
                // PAGE TRAVERSAL IN A ARTIST'S ALBUMS
                savePattern = "artist_" + tmpStr + "_" + queryString;
                urlStr = queryUrl;
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