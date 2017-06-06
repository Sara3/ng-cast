angular.module('video-player')

.component('search', {
  bindings: {
    searchResults: '<'
  },

  controller: function ($scope, youTube) {
    // console.log( is logging from Search.js of the youTube: ', youTube.getData("sdfs"));
    console.log($scope);
    this.result = function(query) {
      $scope.$ctrl.query = query;
      console.log('this is clicking ', $scope.$ctrl);
      
      // youTube.getData(query)
    };
  },  

  

  templateUrl: 'src/templates/search.html'

});
