angular.module('app').controller('mvBuildsMainCtrl', function($scope,mvBuild ) {

    var blds = mvBuild.getAllBuilds();
     $scope.builds = blds;
    

});
