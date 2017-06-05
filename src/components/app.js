angular.module('video-player')

.component('app', {
  bindings: {
    todo: '<'
  },
  controller: function() {
    console.log(this.videoList);
//exampleVideoData
    this.selectVideo = function() {

    };
    this.searchResults = function() {

    };

    this.currentVideo = 'video';
  },
  templateUrl: 'src/templates/app.html'
})
;
