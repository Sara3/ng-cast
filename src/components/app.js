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
  // bindings: {
  //   videos: '<'
  // },
  controller: function($scope) {
    this.currentVideo = exampleVideoData[0];
    this.videos = exampleVideoData;
    this.selectVideo = function() {};
    this.searchResults = function() {};
    
  },

  templateUrl: 'src/templates/app.html'
});
