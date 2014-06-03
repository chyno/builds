angular.module('app').controller('mvBuildDetailCtrl', function($scope,mvBuild, $routeParams) {

    var builds = mvBuild;

    builds.$promise.then(function(collection) {

        collection.forEach(function(build) {
            if (build.id.toString() ===  $routeParams.id) {
                $scope.build = build;
            }
        });
        // $scope.build = collection[1];
    });
    //$scope.build = {id: 1, name: 'build1 node', description: 'this was a successful build it went to production' };


});