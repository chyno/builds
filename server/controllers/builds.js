 
var builds = [{id: 1, name: 'build1 node', description: 'this was a successful build it went to production' }, {id: 2, name: 'build 2 node', description : 'unit test failed did not deply' }];
exports.getBuilds = function(req, res) {
     
        res.send(builds);
 
};

exports.getBuildsById = function(req, res) {
    res.send(builds.filter(function(build) { return build.id === req.params.id; }));
    
}