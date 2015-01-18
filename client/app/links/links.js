angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    links: []
  };

  // Grab links from server
  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(resp){
        $scope.data.links = resp;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.getLinks();

});
