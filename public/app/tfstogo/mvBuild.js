angular.module('app').factory('mvBuild', function($q) {

    return {
        builds: [{buildName: 'build1'}, {buildName: 'build 2'}],

        getLastBuild: function() {
            return builds[0];
        },
        getAllBuilds: function() {
             var dfd = $q.defer();
            dfd.resolve(this.builds);
            return dfd.promise;
            
        }
    };
});

 