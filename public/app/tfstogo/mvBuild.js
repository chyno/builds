angular.module('app').factory('mvBuild', function($q, $resource) {
  var buildsResource = $resource('/api/builds/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });
    return {
         getAllBuilds: function() {
            return buildsResource.query();
        }
    };
});

 