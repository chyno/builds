angular.module('app').controller('mvBuildsMainCtrl', function($scope,mvBuild ) {
   
    mvBuild.getAllBuilds().then(function(data) {
        $scope.builds = data;
    });
   
   

});
