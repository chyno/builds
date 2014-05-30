angular.module('app').controller('mvBuildDetailCtrl', function($scope,mvBuild, $routeParams) {

     var blds = mvBuild.getAllBuilds();
     $scope.builds = blds;
     blds.forEach(function(build) {
            if (build.id === $routeParams.id) {
                $scope.build = build;
            }
        });
    });