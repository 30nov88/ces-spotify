(function () {
    'use strict';
    angular
        .module('spotApp')
        .factory('getResultService', getResultService);

    function  getResultService(){
        var exports = {
            getParseResult: getParseResult,
            getResult: getResult,
            getCount: getCount
        };
        var resultObj = {};

        return exports;

        ////////////

        function getResult(){
            return resultObj;
        }

        function getCount(){
            var countObj = {};
            countObj.start = resultObj.jsonStr.artists.offset + 1;
            countObj.end = resultObj.jsonStr.artists.offset + resultObj.jsonStr.artists.items.length;
            return countObj;
        }

        function getParseResult(){
            var tmpKey, tmpStr = "";
            // TO GET THE LAST SEARCHED ITEM THROUGH THE SAVE PATTERN
            for(var i=0; i<localStorage.length; i++) {
                tmpStr = localStorage.key(i);
                if(tmpStr.startsWith(localStorage.length)) {
                    tmpKey = i;
                    break;
                }
            }
            if(tmpKey !== undefined) {
                tmpKey = localStorage.key(tmpKey);
                tmpStr = localStorage[tmpKey];

                // ERROR-PRONE
                // assumption that the string doesn't have any (other) special characters
                tmpKey = tmpKey.split("_");

                resultObj.type = (tmpKey[2] === "artist") ? true : false;
                resultObj.jsonStr = JSON.parse(tmpStr);
                resultObj.searchQuery = tmpKey[1];
            }

            return resultObj;
        } // GET PARSE RESULT
    }
})();