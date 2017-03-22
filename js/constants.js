(function () {
    'use strict';
    angular
        .module('spotApp')
        .constant('constants', {
            apiURL: "https://api.spotify.com/v1/search?q="
        });
})();