angular.module('app').factory('mvBuild', function($q) {
    return {
        builds : [
            { "buildName ": "Develoipment TFS to GO", "Success": true, "timeFinished": "11\/29\/2013 04:09:31" },
            { "buildName ": "Develoipment TFS to GO 1", "Success": true, "timeFinished": "11\/23\/2014 04:09:31" },
            { "buildName ": "Develoipment TFS to GO 2", "Success": false, "timeFinished": "11\/10\/2014 04:09:31" }
        ],
        getLastBuild: function() {
            var deferred = $q.defer();
         
            deferred.resolve(builds[0]);
            return deferred.promise;
        },
        getAllBuilds: function() {
            var deferred = $q.defer();
            deferred.resolve(builds);
            return deferred.promise;
        }

    };
});


 