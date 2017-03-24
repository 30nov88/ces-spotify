(function () {
    'use strict';
    angular
        .module('spotApp')
        .factory('getResultService', getResultService);

    function  getResultService(){
        var exports = {
            getParseResult: getParseResult,
            getResult: getResult,
            getCount: getCount,
            getListCount: getListCount,
            findKeyLocal: findKeyLocal
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

        function getListCount(){
            var countObj = {};
            countObj.start = resultObj.jsonStr.offset + 1;
            countObj.end = resultObj.jsonStr.offset + resultObj.jsonStr.items.length;
            return countObj;
        }

        function findKeyLocal(inpPattern){
            var tmpKey = 0, tmpStr = "";
            for(var i = 0; i<localStorage.length; i++) {
                tmpStr = localStorage.key(i);
                if(tmpStr.startsWith(inpPattern)) {
                    tmpKey = i;
                    break;
                }
            }
            return tmpKey;
        }

        function getParseResult(patternStart){
            var tmpStr = patternStart + localStorage.length + "_"
            // TO GET THE LAST SEARCHED ITEM USING SAVE PATTERN
            var tmpKey = findKeyLocal(tmpStr);

            if(tmpKey !== undefined) {
                tmpKey = localStorage.key(tmpKey);
                tmpStr = localStorage[tmpKey];

                if(patternStart === ""){
                    // ERROR-PRONE
                    // assumption that the search string doesn't have any (other) special characters
                    tmpKey = tmpKey.split("_");
                    resultObj.type = (tmpKey[2] === "artist") ? true : false;
                    resultObj.searchQuery = tmpKey[1];
                }
                resultObj.jsonStr = JSON.parse(tmpStr);
            }

            return resultObj;
        } // GET PARSE RESULT
    }
})();