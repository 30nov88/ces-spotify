
(function() {
    'use strict';

    angular
        //.module('spotApp',['spotify'])
        .module('spotApp')
        .controller('HomeCtrl',HomeCtrl);

    //HomeCtrl.$inject = ['spotify'];

    //function HomeCtrl(spotify){
      function HomeCtrl(){
        var vm = this;
        vm.btnSearchClick = function(){
          if(!(vm.songName || vm.artistName)) {
              showToast('Kindly enter a search input','warning');
          } else {
              // MAKE SERVICE CALL
              //spotify.search(vm.songName, 'track').then(successFun(data));
          }

        };
    }
    
    function successFun(data){
        console.log(data);
    }
})();