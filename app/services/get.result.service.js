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
            findKeyLocal: findKeyLocal
        };
        var resultObj = {};

        return exports;

        ////////////

        // TO BE CALLED ONLY AFTER GET-PARSE-RESULT
        function getResult(){
            return resultObj;
        }

        // TO GET PAGE COUNT
        function getCount(){
            var countObj = {};
            
            if(resultObj.jsonStr.artists !== undefined){
                countObj.start = resultObj.jsonStr.artists.offset + 1;
                countObj.end = resultObj.jsonStr.artists.offset + resultObj.jsonStr.artists.items.length;
            } else {
                countObj.start = resultObj.jsonStr.offset + 1;
                countObj.end = resultObj.jsonStr.offset + resultObj.jsonStr.items.length;
            }
            return countObj;
        }

        // TO GET THE LAST SAVED ITEM USING THE PATTERN - INTERNAL USE
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

        // TO GET THE LAST SEARCHED ITEM THROUGH LOCAL STORAGE
        function getParseResult(patternStart){
            var tmpStr = patternStart + localStorage.length + "_";
            var tmpKey = findKeyLocal(tmpStr);

            if(tmpKey !== undefined) {
                tmpKey = localStorage.key(tmpKey);
                tmpStr = localStorage[tmpKey];

                if(patternStart === ""){
                    // ERROR-PRONE
                    // assumption that the search string doesn't have any underscore character
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