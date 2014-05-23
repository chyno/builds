angular.module('app').factory('mvBuild', function($q) {

    return {
        builds: [{buildName: 'build1'}, {buildName: 'build 2'}],

        getLastBuild: function() {
            return null;
        },
        getAllBuilds: function() {
            return this.builds;
        }
    };
});

 