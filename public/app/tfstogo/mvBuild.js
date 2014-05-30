angular.module('app').factory('mvBuild', function($q, $resource) {
  var buildsResource = $resource('/api/builds/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });
    return {
        //builds: [{buildName: 'build1'}, {buildName: 'build 2'}],

        getBuild: function(i) {
            return null;
        },
        getAllBuilds: function() {
            return buildsResource.query();

        }
    };
});

 