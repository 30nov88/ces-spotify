(function () {
    'use strict';
    angular
        .module('spotApp')
        .factory('getResultService', getResultService);

    //getResultService.$inject = [''];

    /* @ngInject */
    function  getResultService(){
        var exports = {
            getParseResult: getParseResult,
            getResult: getResult
        };
        var resultObj = {};

        return exports;

        function getResult(){
            return resultObj;
        }

        function getParseResult(){
            var tmpKey, tmpStr;
            
            // TO GET THE LAST SEARCHED ITEM THROUGH THE SAVE PATTERN
            for(var i=0; i<localStorage.length; i++) {
                tmpStr = localStorage.key(i);
                if(tmpStr.startsWith(localStorage.length)) {
                    tmpKey = i;
                    break;
                }
            }
             tmpKey = localStorage.key(tmpKey);
             tmpStr = localStorage[tmpKey];

            // ERROR-PRONE
            // assumption that the string doesn't have any (other) special characters
            // and localstorage is non-empty
            tmpKey = tmpKey.split("_");

            if(tmpKey[2] === "artist")
                resultObj.type = true;
            else
                resultObj.type = false;

            resultObj.jsonStr = JSON.parse(tmpStr);
            resultObj.searchQuery = tmpKey[1];

            return resultObj;
        } // GET RESULT
    }
})();