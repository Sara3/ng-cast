angular.module('video-player')
.service('youTube', function($http) {
  this.getData = function(callback, query) {
    $http({
      method: 'GET',
      url: '/youtube/v3/search',
      params: {
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: true,
        maxResults: '5',
        q: query
      }
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
      console.log('successfully fetched data from Youtube: ', response);
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      console.log('failed to fetch data from Youtube: ', reponse);
    });
  };
});
