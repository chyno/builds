angular.module('app').controller('mvBuildsMainCtrl', function($scope,mvBuild ) {

    var data = mvBuild.getAllBuilds();
     $scope.builds = data;
    $scope.selectBuild = function() {};

});
