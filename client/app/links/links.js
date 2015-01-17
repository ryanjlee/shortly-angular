angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Grab links from server
  $scope.data = {
    links: []
  };

  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(resp){
        console.log(resp);
        $scope.data.links = resp;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.getLinks();

});
