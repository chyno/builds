angular.module('app').controller('mvBuildsMainCtrl', function($scope,mvBuild ) {
   
    $scope.init = function() {
       this.builds = mvBuild.getAllBuilds();
    };
});
