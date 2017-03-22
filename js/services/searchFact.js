(function() {
    'use strict';

    angular
        .module('spotApp')
        .factory('searchFact', searchFact);

    searchFact.$inject = ['constants', '$http'];

    function searchFact(constants, $http){
        var exports = {
            searchSpotify: searchSpotify
        };
        
        return exports;
        
        function searchSpotify(queryString, queryType){
            var savePattern = queryString + "_" + queryType;
            //var storageValue = localStorage.getItem(savePattern);

            return $http({
                  method: 'GET',
                  url: constants.apiURL + encodeURIComponent(queryString) + "&type=" + queryType,
            }).then(successCallback).catch(errorCallback);

            function successCallback(response){
                $('.loader').fadeOut();
                localStorage.setItem(savePattern, JSON.stringify(response.data));
            }

            function errorCallback(error){
                showToast("Something went wrong. Kindly reload the page", "message", "show");
            }
        }  // SEARCH SPOTIFY

    } // SEARCH FACTORY

})();