angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },
  controller: function($scope) {
    console.log("scope of vidList", $scope)
    // this.displayVideo = function() {

    // };
  },

  
 


  templateUrl: 'src/templates/videoList.html'
});
