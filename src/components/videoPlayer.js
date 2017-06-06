angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '=',
    selectVideo: '='
  },

  controller: function($scope) {
    console.log('video player', this.video);
    
  },
  


  templateUrl: 'src/templates/videoPlayer.html'

});
