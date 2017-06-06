angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<'
  },
  controller: function($scope) {
    // console.log($scope);

  },

  templateUrl: 'src/templates/videoListEntry.html'

});
