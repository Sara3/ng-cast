angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    video: '<'
    
   
  },
  controller: function($scope) {
    console.log($scope.$ctrl.video);
    this.onClick = function(video) {
      $scope.$ctrl.video = video;
      console.log($scope.$ctrl.video);
      
    };
    
    // console.log("scope of vidList", $scope.$ctrl.videos[0]);
    // this.displayVideo = function() {
    
    // this.videos.forEach(video => {
    //   console.log(video);
    // });
  

    // this.createVideos()
    // };
  //video list entry --> video list 
  // <videoListEntry videos="$ctrl.videos"><h5><em>videoList</em>  </h5></videoListEntry>
  },

  
 


  templateUrl: 'src/templates/videoList.html'
});
