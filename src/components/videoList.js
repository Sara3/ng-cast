angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '=',
    video: '=',
  },

  controller: function($scope) {
    console.log($scope);

    this.onClick = function(video) {
      this.video = video;
    };

  },

  
 


  templateUrl: 'src/templates/videoList.html'
});
