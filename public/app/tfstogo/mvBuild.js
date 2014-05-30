angular.module('app').factory('mvBuild', function($q, $resource) {
  var BuildResource = $resource('/api/builds/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });
    return BuildResource.query();
});

 