angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  controller: function($scope) {

    console.log('video player', $scope);
  },
  


  templateUrl: 'src/templates/videoPlayer.html'

});
