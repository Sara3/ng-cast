angular.module('video-player')
// .service('dataService', function() { 
//   this.currentVideo = exampleVideoData[0];
//   this.videos = exampleVideoData;
// })

// .controller('videoCtrl', function($scope) {
//   console.log($scope);
//   $scope.videos = exampleVideoData;
//   $scope.video = exampleVideoData[0];
//   $scope.selectVideo = function() {

//   };
//   $scope.searchResults = function() {

//   };

// })

.component('app', {
  controller: function($scope, youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = function(newVideo) {
      this.currentVideo = newVideo;
    };

    this.searchResults = function(callback, query) {
      youTube.getData(callback, query);
    };

    
    
  },

  templateUrl: 'src/templates/app.html'
});
