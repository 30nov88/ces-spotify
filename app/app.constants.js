(function () {
    'use strict';
    angular
        .module('spotApp')
        .constant('constants', {
            searchURL: "https://api.spotify.com/v1/search?q=",
            artistsURL: "https://api.spotify.com/v1/artists/",
            song: "track,playlist,album",
            artist: "artist"
        });
})();